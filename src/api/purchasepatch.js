/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import { Modal } from "antd";
// import { client } from "./client";
import axios from "axios";

// 유저 매장정보 get
export const getUserStoreInfo = async setUserStore => {
  try {
    const res = await axios.get("/api/payment/pickregion");
    const result = await res.data;
    setUserStore(result);
    // console.log("result", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 구입상품 디테일 정보 get
export const getBuyProductDetail = async (setProductCollect, productId) => {
  try {
    const res = await axios.get(`/api/detail/${productId}`);
    const result = res.data;
    // console.log("result", result);
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
    const res = await axios.post("/api/payment/eachpayment", {
      productId: productCollect.wineDetailVo.productId, // 상품 pk
      storeId: selectCollect.pickUpSpot.storeId, //지점 pk
      // salePrice: totalPrice, //총 금액,
      // payment: isPayment, //카드결제 1번
      pickupTime: selectCollect.changeDate,
      quantity: editQuantity.quantity, // 수량
    });
    // console.log(res);
    const data = await res.data;
    // console.log("결제성공", data);
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
export const postSomeItemPurchase = async ({ selectCollect, navigate }) => {
  try {
    const res = await axios.post("/api/payment/cartpayment", {
      storeId: selectCollect.pickUpSpot.storeId,
      pickupTime: selectCollect.changeDate,
    });
    // console.log(res);
    const data = await res.data;
    // console.log("결제성공", data);
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

// 장바구니에서 결제할때 수량변경 put
export const patchItemQuatt = async ({ cartId, quantity }) => {
  // console.log("Patch cartId,", cartId);
  // console.log("Patch quantity,", quantity);
  try {
    const res = await axios.put(
      `/api/wine/productquantity?cartId=${cartId}&quantity=${quantity}`,
    );
    // console.log("res", res);
    const result = res.data;
    // console.log("변경성공", result);
    return result;
    
  } catch (error) {
    console.log("변경실패", error);
  }
};
