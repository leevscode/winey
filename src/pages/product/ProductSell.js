/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
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
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { getUserStoreInfo } from "../../api/purchasepatch";

const ProductSell = () => {
  const [userStore, setUserInfo] = useState([]);
  
  const 임시데이터 = {
    TempList: [
      {
        productPK: "22",
        productImg: "",
        productKorName: "프란시스 포드 코폴라, 엘레노어",
        productEngName: "Francis Ford Coppola, Eleanor",
        sellPrice: 32600,
        number: 1,
      },
      {
        productPK: "23",
        productImg: "https://via.placeholder.com/190x350/ffeeee",
        productKorName: "비냐 콘차이토로 푸두 카베르네 소비뇽 쉬라즈",
        productEngName: "VINA CONCHA Y TORO PUDU CABERNET SAUVIGNON SHIRAZ",
        sellPrice: 72000,
        number: 3,
      },
      {
        productPK: "24",
        productImg: "https://via.placeholder.com/350x350/ffffee",
        productKorName: "스가르지 루이지, 레티자 화이트",
        productEngName: "Sgarzi Luigi, Letizia White",
        sellPrice: 14500,
        number: 2,
      },
    ],
  };

  const navigate = useNavigate();

  // 픽업 선택값 담기 state
  const [selectCollect, setSelectCollect] = useState([]);
  // 제품 선택 값 담기
  const [productCollect, setProductCollect] = useState(임시데이터.TempList);
  console.log("productCollect", productCollect);
  // 합계값 담기 state
  const [totalPrice, setTotalPrice] = useState(0);
  // 카드결제 유무 담기 state
  const [isPayment, setIsPayment] = useState(0);
  // 전체 담기 state
  const [totalPayList, setTotalPayList] = useState([]);

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
    setIsPayment(1);
    setTotalPayList({ productCollect, selectCollect, totalPrice, isPayment });
    console.log("isPayment", isPayment);
    console.log("totalPayList", totalPayList);
  };

  // 최종결제 버튼
  const handleFinalCharge = e => {
    // 에러처리
    if (
      selectCollect.pickUpData === undefined ||
      selectCollect.pickUpData === ""
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

    navigate("/ProductComplete", { state: totalPayList });
  };

  useEffect(() => {
    getUserStoreInfo(setUserInfo);
    console.log("totalPayList", totalPayList);
  }, [productCollect, selectCollect]); // totalPayList 값이 변경될 때마다 실행

  return (
    <PurchaseWrap>
      <PickupPlaceClick
        // get한 지점정보
        userStore={userStore}
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

export default ProductSell;
