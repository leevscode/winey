import React, { useState } from "react";
import PickupPlaceClick from "../../components/ProductSell/PickupPlaceClick";
import PurchaseList from "../../components/ProductSell/PurchaseList";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import { PurchaseBtn, PurchaseWrap } from "../../style/ProductSellStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

const ProductSell = () => {
  const navigate = useNavigate();

  // 픽업 선택값 담기 state
  const [selectCollect, setSelectCollect] = useState([]);
  // 제품 선택 값 담기
  const [productCollect, setProductCollect] = useState([]);
  // 합계값 담기 state
  const [totalPrice, setTotalPrice] = useState(0);
  // 카드결제 유무 담기 state
  const [isPayment, setIsPayment] = useState(0);
  // 전체 담기 state
  const [totalPayList, setTotalPayList] = useState([]);

  // 카드결제 모달창
  const { info } = Modal;
  const handleCreditCard = () => {
    info({
      title: "카드결제",
      content: <div>결제가 완료되었습니다.</div>,
      onOk() {},
    });
    setIsPayment(1);
    console.log("isPayment", isPayment);
  };
  // 최종결제 버튼
  const handleFinalCharge = () => {
    setTotalPayList({ productCollect, selectCollect, totalPrice, isPayment });
    console.log("totalPayList", totalPayList);

    navigate("/ProductComplete", { state: totalPayList });
  };

  return (
    <PurchaseWrap>
      <PickupPlaceClick
        selectCollect={selectCollect}
        setSelectCollect={setSelectCollect}
      />
      <PurchaseList
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        productCollect={productCollect}
        setProductCollect={setProductCollect}
      />

      <PurchaseBtn>
        <span>결제수단</span>
        <p>결제수단을 선택해 주세요</p>
        <ButtonCancel onClick={handleCreditCard}>
          <FontAwesomeIcon icon={faCreditCard} />
          카드결제
        </ButtonCancel>
        <ButtonOk onClick={handleFinalCharge}>
          {totalPrice.toLocaleString()}원 결제하기
        </ButtonOk>
      </PurchaseBtn>
    </PurchaseWrap>
  );
};

export default ProductSell;
