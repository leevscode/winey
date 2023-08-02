import React, { useState } from "react";
import {
  ModalColse,
  SellListButton,
  SellListModal,
  ModalText,
  ReviewIcon,
  ReviewModalbox,
} from "../../style/SellListStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrinSquint,
  faFaceSmile,
  faFaceRollingEyes,
} from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ButtonOk, ButtonCancel } from "../../style/GlobalStyle";

const ReviewModal = ({ modalVisible, hideModal }) => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const handleReviewSelection = reviewType => {
    setSelectedReview(reviewType);
    console.log("선택된 평점:", reviewType);
  };

  // DB연동 예정
  const handleReviewSubmit = () => {
    if (selectedReview) {
      console.log("평점이 등록되었습니다:", selectedReview);
      // DB연동 예정

      // 평점 처리가 완료되면 모달을 닫습니다.
      hideModal();
    } else {
      // If review is not selected, show the warning alert
      setShowWarning(true);
    }
  };

  return (
    <SellListModal modalVisible={modalVisible}>
      {modalVisible && (
        <div>
          <ModalText>
            <button onClick={() => hideModal()}>
              <ModalColse>
                <FontAwesomeIcon icon={faXmark} />
              </ModalColse>
            </button>
            <h1>드신 와인은 어떠셨나요?</h1>
            <h2>지금 바로 평점을 남겨보세요!</h2>
            <ReviewModalbox>
              <button onClick={() => handleReviewSelection("good")}>
                <li>
                  <ReviewIcon>
                    <FontAwesomeIcon icon={faFaceGrinSquint} />
                  </ReviewIcon>
                  좋아요
                </li>
              </button>
              <button onClick={() => handleReviewSelection("normal")}>
                <li>
                  <ReviewIcon>
                    <FontAwesomeIcon icon={faFaceSmile} />
                  </ReviewIcon>
                  보통이에요
                </li>
              </button>
              <button onClick={() => handleReviewSelection("bad")}>
                <li>
                  <ReviewIcon>
                    <FontAwesomeIcon icon={faFaceRollingEyes} />
                  </ReviewIcon>
                  취향이아니에요
                </li>
              </button>
            </ReviewModalbox>
            <SellListButton>
              <ButtonOk onClick={handleReviewSubmit}>평점등록</ButtonOk>{" "}
              <ButtonCancel onClick={() => hideModal()}>취소</ButtonCancel>
            </SellListButton>
            {showWarning && <p style={{ color: "red" }}>평점을 선택해주세요.</p>}
          </ModalText>
        </div>
      )}
    </SellListModal>
  );
};

export default ReviewModal;
