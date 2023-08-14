/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React, { useEffect, useState } from "react";
import PickupPlaceClick from "../../components/ProductSell/PickupPlaceClick";
import PurchaseList from "../../components/ProductSell/PurchaseList";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import {
  ProductSellErrors,
  PurchaseBtn,
  PurchaseWrap,
} from "../../style/ProductSellStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Modal } from "antd";
import {
  getUserStoreInfo,
  postSomeItemPurchase,
} from "../../api/purchasepatch";
import PurchaseListCart from "../../components/ProductSell/PurchaseListCart";

const ProductSellCart = () => {
  const navigate = useNavigate();
  const state = useLocation();
  console.log("state.state", state.state);
  const cartState = state.state;

  // user별 매장정보
  const [userStore, setUserStore] = useState([]);

  // 픽업 선택 값 담기
  const [selectCollect, setSelectCollect] = useState([]);

  // 상품 정보 값 담기
  const [productCollect, setProductCollect] = useState(cartState);
  // const [productCollect, setProductCollect] = useState(cartState.CartData);
  console.log("productCollect", productCollect);
  // get한 아이템정보를 배열에 담자
  const productInfoArray = productCollect.CartData;

  // 수량변경 state
  const [editQuantity, setEditQuantity] = useState(cartState.CartData.quantity);

  // 합계값 담기 state
  const [totalPrice, setTotalPrice] = useState(cartState.totalPrice);

  // 카드결제 유무 담기 state
  const [isPayment, setIsPayment] = useState(0);

  // 에러처리 state
  const [paymentError, setPaymentError] = useState("");

  // 카드결제 모달창
  const { info } = Modal;
  const handleCreditCard = () => {
    info({
      title: "카드결제",
      content: (
        <div>
          결제가 완료처리 되었습니다.
          <br />
          <strong>
            해당사이트는 스터디용으로 제작되었으므로 실제 결제가 이루어지지
            않음을 알려드립니다.
          </strong>
        </div>
      ),
      onOk() {},
    });
    setPaymentError(null);
    setIsPayment(1);
  };

  // 최종결제 버튼
  const handleFinalCharge = e => {
    // 에러처리
    if (
      selectCollect.pickUpDate === undefined ||
      selectCollect.pickUpDate === ""
    ) {
      setPaymentError("픽업 날짜를 선택해 주세요.");
      return;
    }
    if (
      selectCollect.pickUpSpot === undefined ||
      selectCollect.pickUpSpot === ""
    ) {
      setPaymentError("픽업 장소를 선택해 주세요.");
      return;
    }
    if (
      selectCollect.pickUpTime === undefined ||
      selectCollect.pickUpTime === ""
    ) {
      setPaymentError("픽업 시간를 선택해 주세요.");
      return;
    }
    if (productCollect === undefined || productCollect === "") {
      setPaymentError("제품을 선택해 주세요.");
      return;
    }
    if (isPayment === 0 || isPayment === "") {
      setPaymentError("결제를 진행해 주세요.");
      return;
    }
    Modal.confirm({
      title: "최종결제확인",
      content: "주문을 완료하시겠습니까?",
      onOk() {
        // 최종결제완료
        postSomeItemPurchase({
          productCollect,
          selectCollect,
          isPayment,
          totalPrice,
        });
        navigate("/ProductCompleteCart", {
          state: {
            productCollect,
            selectCollect,
            isPayment,
            totalPrice,
          },
        });
        console.log("결제완료");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  useEffect(() => {
    // 유저 매장정보 get
    getUserStoreInfo(setUserStore);
    // 상품정보 get
    // getBuyProductDetail(setProductCollect, productId);
  }, []);

  // useEffect(() => {}, [productCollect, selectCollect]); // 값 변경될때마다 랜더링
  return (
    <PurchaseWrap>
      <PickupPlaceClick
        // get한 지점정보 보내기
        userStore={userStore}
        // 픽업정보 담아오기
        selectCollect={selectCollect}
        setSelectCollect={setSelectCollect}
      />

      {productCollect && (
        <PurchaseListCart
          // 합계값 담아오기
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          // 상품변경정보 담아오기
          productCollect={productCollect}
          setProductCollect={setProductCollect}
          // 상품정보 보내기
          productInfoArray={productInfoArray}
          // 수량변경값
          setEditQuantity={setEditQuantity}
        />
      )}
      <PurchaseBtn>
        <span>결제수단</span>
        <p>결제수단을 선택해 주세요</p>
        <ButtonCancel onClick={handleCreditCard}>
          <FontAwesomeIcon icon={faCreditCard} />
          카드결제
        </ButtonCancel>
        <ProductSellErrors>
          {paymentError ? (
            <p>
              <FontAwesomeIcon icon={faCircleCheck} />
              {paymentError}
            </p>
          ) : null}
        </ProductSellErrors>
        <ButtonOk onClick={handleFinalCharge}>
          {totalPrice.toLocaleString()}원 결제하기
        </ButtonOk>
      </PurchaseBtn>
    </PurchaseWrap>
  );
};

export default ProductSellCart;
