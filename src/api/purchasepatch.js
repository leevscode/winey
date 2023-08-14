/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import { Modal } from "antd";
import { client } from "./client";

// 유저 매장정보 get
export const getUserStoreInfo = async setUserStore => {
  try {
    const res = await client.get("/api/payment/region");
    const result = await res.data;
    setUserStore(result);
    console.log("result", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 구입상품 디테일 정보 get
export const getBuyProductDetail = async (setProductCollect, productId) => {
  try {
    const res = await client.get(`/api/detail/${productId}`);
    const result = res.data;
    console.log("result", result);
    setProductCollect(result);
  } catch (err) {
    console.log("와인정보 get 실패", err);
  }
};

// 상세페이지에서 direct로 결제하기 post
export const postOneItemPurchase = async ({
  productCollect,
  selectCollect,
  isPayment,
  totalPrice,
  editQuantity,
  navigate,
  isell,
}) => {
  try {
    const res = await client.post("/api/payment/eachpayment", {
      productId: productCollect.wineDetailVo.productId, // 상품 pk
      storeId: selectCollect.pickUpSpot.storeId, //지점 pk
      salePrice: totalPrice, //총 금액,
      payment: isPayment, //카드결제 1번
      pickupTime: selectCollect.changeDate,
      quantity: editQuantity.quantity, // 수량
    });
    console.log(res);
    const data = await res.data;
    console.log("결제성공", data);
  } catch (error) {
    console.log("결제실패", error);
    Modal.error({
      title: "결제실패",
      content: (
        <>
          결제에 실패했습니다. <br />
          확인 후 다시한번 시도해 주세요.
        </>
      ),
    });
    navigate(`/productsell/${isell}`);
  }
};

// 장바구니에서 결제하기 post
export const postSomeItemPurchase = async ({
  productCollect,
  selectCollect,
  totalPrice,
  navigate,
}) => {
  const list = await productCollect.CartData.map(cartItem => ({
    cartId: cartItem.cartId,
    productId: cartItem.productId,
    quantity: productCollect.finalQuantity,
    pic: cartItem.pic,
    salePrice: cartItem.salePrice,
    price: cartItem.price,
    nmKor: cartItem.nmKor,
    nmEng: cartItem.nmEng,
  }));

  try {
    const res = await client.post("/api/payment/payment", {
      storeId: selectCollect.pickUpSpot.storeId,
      pickupTime: selectCollect.changeDate,
      totalOrderPrice: totalPrice,
      list: list,
    });
    console.log(res);
    const data = await res.data;
    console.log("결제성공", data);
  } catch (error) {
    console.log("결제실패", error);
    Modal.error({
      title: "결제실패",
      content: (
        <>
          결제에 실패했습니다. <br />
          확인 후 다시한번 시도해 주세요.
        </>
      ),
    });
    navigate("/cart");
  }
};
