/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode
    깃허브 : https://github.com/leevscode
*/

import React, { useState } from "react";
import { ButtonOk, ButtonCancel } from "../../style/GlobalStyle";
import {
  ModalColse,
  SellListButton,
  SellListInfo,
  SellListModal,
  ModalText,
  ReviewIcon,
  ReviewModal,
} from "../../style/SellListStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrinSquint,
  faFaceSmile,
  faFaceRollingEyes,
} from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
      <SellListModal modalVisible={modalVisible}>
        {modalVisible && (
          <div>
            <ModalText>
              <button onClick={hideModal}>
                <ModalColse>
                  <FontAwesomeIcon icon={faXmark} />
                </ModalColse>
              </button>
              <h1>픽업하신 와인은 어떠셨나요?</h1>
              <h2>지금 바로 평점을 남겨보세요!</h2>
              <ReviewModal>
                <button>
                  <li>
                    <ReviewIcon>
                      <FontAwesomeIcon icon={faFaceGrinSquint} />
                    </ReviewIcon>
                    좋아요
                  </li>
                </button>
                <button>
                  <li>
                    <ReviewIcon>
                      <FontAwesomeIcon icon={faFaceSmile} />
                    </ReviewIcon>
                    보통이에요
                  </li>
                </button>
                <button>
                  <li>
                    <ReviewIcon>
                      <FontAwesomeIcon icon={faFaceRollingEyes} />
                    </ReviewIcon>
                    취향이아니에요
                  </li>
                </button>
              </ReviewModal>
              <SellListButton>
                <ButtonOk>평점등록</ButtonOk>{" "}
                <ButtonCancel onClick={hideModal}>취소</ButtonCancel>
              </SellListButton>
            </ModalText>
          </div>
        )}
      </SellListModal>
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
