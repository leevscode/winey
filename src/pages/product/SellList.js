import React, { useState } from "react";
import { ButtonOk, ButtonCancel } from "../../style/GlobalStyle";
import { SellListButton, SellListInfo } from "../../style/SellListStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinSquint } from "@fortawesome/free-regular-svg-icons";

const SellList = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div>
        <h1>2023.07.23</h1>
        <SellListInfo>
          <li>상품명: 제프 까렐, 울띰 헤꼴뜨 </li>
          <li>주문번호: 2316514564613</li>
          <li>결제 방법: 신용카드</li>
          <li>결제 금액: 98,700</li>
          <li>주문 상태: 픽업완료</li>
        </SellListInfo>
        <SellListButton>
          <ButtonOk>픽업완료</ButtonOk>{" "}
          <ButtonCancel onClick={showModal}>평점등록</ButtonCancel>
        </SellListButton>
      </div>
      <sellListModal>
        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <h1>픽업하신 와인은 어떠쎴나요?</h1>
              <h2>지금 바로 평점을 남겨보세요.</h2>
              <FontAwesomeIcon icon={faFaceGrinSquint} />
              <SellListButton>
                <ButtonOk>평점등록</ButtonOk>{" "}
                <ButtonCancel onClick={hideModal}>취소</ButtonCancel>
              </SellListButton>
            </div>
          </div>
        )}
      </sellListModal>
      <div>
        <h1>2023.07.23</h1>
        <SellListInfo>
          <li>상품명: 제프 까렐, 울띰 헤꼴뜨 </li>
          <li>주문번호: 2316514564613</li>
          <li>결제 방법: 신용카드</li>
          <li>결제 금액: 98,700</li>
          <li>주문 상태: 픽업완료</li>
        </SellListInfo>
        <SellListButton>
          <ButtonOk>픽업완료</ButtonOk> <ButtonCancel>주문취소</ButtonCancel>
        </SellListButton>
      </div>
    </>
  );
};

export default SellList;
