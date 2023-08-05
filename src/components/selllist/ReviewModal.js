import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrinSquint,
  faFaceSmile,
  faFaceRollingEyes,
} from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ButtonOk, ButtonCancel } from "../../style/GlobalStyle";
import {
  ModalColse,
  ModalText,
  ReviewIcon,
  ReviewModalbox,
  SellListButton,
  SellListModal,
} from "../../style/SellListReviewStyle";

const ReviewModal = ({ reviewReset, hideModal, reviewSubmitUpdate }) => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  // DB연동 예정
  const handleReviewSubmit = () => {
    if (selectedReview) {
      console.log("평점이 등록되었습니다:", selectedReview);
      // DB연동 예정

      // 리뷰가 성공적으로 제출되면 reviewSubmit를 true로 설정
      reviewSubmitUpdate();

      // 평점 처리가 완료되면 모달을 닫습니다.
      hideModal();
    } else {
      setShowWarning(true);
    }
  };

  const handleReviewSelection = reviewType => {
    setSelectedReview(prevReview => {
      const newReview = prevReview === reviewType ? null : reviewType;
      console.log("선택된 평점:", newReview);
      // 선택한 평점을 다시 선택시 해제되도록 설정
      return newReview;
    });
  };

  // 모달 닫기를 처리하는 함수
  const closeModal = () => {
    setShowWarning(false);
    hideModal();
  };

  // 모달이 닫힐 때 상태를 평점 선택을 초기화
  useEffect(() => {
    if (!reviewReset) {
      setSelectedReview(null);
    }
  }, [reviewReset]);

  return (
    <SellListModal reviewReset={reviewReset}>
      {reviewReset && (
        <div>
          <ModalText>
            <button onClick={() => hideModal()}>
              <ModalColse>
                <FontAwesomeIcon onClick={() => closeModal()} icon={faXmark} />
              </ModalColse>
            </button>
            <h1>드신 와인은 어떠셨나요?</h1>
            <h2>지금 바로 평점을 남겨보세요!</h2>
            <ReviewModalbox>
              <button
                onClick={() => handleReviewSelection("good")}
                className={selectedReview === "good" ? "selected" : ""}
              >
                <li>
                  <ReviewIcon>
                    <FontAwesomeIcon icon={faFaceGrinSquint} />
                  </ReviewIcon>
                  좋아요
                </li>
              </button>
              <button
                onClick={() => handleReviewSelection("normal")}
                className={selectedReview === "normal" ? "selected" : ""}
              >
                <li>
                  <ReviewIcon>
                    <FontAwesomeIcon icon={faFaceSmile} />
                  </ReviewIcon>
                  보통이에요
                </li>
              </button>
              <button
                onClick={() => handleReviewSelection("bad")}
                className={selectedReview === "bad" ? "selected" : ""}
              >
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
              <ButtonCancel onClick={() => closeModal()}>취소</ButtonCancel>
            </SellListButton>
            {showWarning && (
              <p style={{ color: "red", fontSize: "1.5rem" }}>
                평점을 선택해주세요.
              </p>
            )}
          </ModalText>
        </div>
      )}
    </SellListModal>
  );
};

export default ReviewModal;