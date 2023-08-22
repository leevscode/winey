/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/
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
  ReviewModalButton,
  ReviewModalbox,
  SellListButton,
  SellListModal,
} from "../../style/SellListReviewStyle";
import { submitReview } from "../../api/patchselllist";
import { useSelector } from "react-redux";

const ReviewModal = ({
  reviewId,
  reviewReset,
  hideModal,
  reviewSubmitUpdate,
}) => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  //const [submitReview, setSubmitReview] = useState()

  // 사용자 정보
  const userData = useSelector(state => state.user);
  const handleReviewSubmit = async () => {
    if (selectedReview) {
      // console.log("평점이 등록될 orderDetailId :", reviewId);
      // console.log("평점이 등록되었습니다 평점 레벨 :", selectedReview);
      // DB연동 예정
      await submitReview(reviewId, selectedReview, userData.userId);

      // 리뷰가 성공적으로 제출되면 reviewSubmit를 true로 설정
      reviewSubmitUpdate(selectedReview);

      // 평점 처리가 완료되면 모달을 닫습니다.

      // console.log("평점 등록");
      hideModal();
    } else {
      setShowWarning(true);
    }
  };

  const handleReviewSelection = reviewType => {
    setSelectedReview(prevReview => {
      const newReview = prevReview === reviewType ? null : reviewType;
      // console.log("선택된 평점:", newReview);
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
        <ModalText>
          <ModalColse onClick={() => hideModal()}>
            <i>
              <FontAwesomeIcon onClick={() => closeModal()} icon={faXmark} />
            </i>
          </ModalColse>
          <h3>드신 와인은 어떠셨나요?</h3>
          <p>지금 바로 평점을 남겨보세요!</p>
          <ReviewModalbox>
            <li>
              <button
                onClick={() => handleReviewSelection(1)}
                className={selectedReview === 1 ? "selected" : ""}
              >
                <ReviewIcon>
                  <FontAwesomeIcon icon={faFaceGrinSquint} />
                </ReviewIcon>
                좋아요
              </button>
            </li>
            <li>
              <button
                onClick={() => handleReviewSelection(2)}
                className={selectedReview === 2 ? "selected" : ""}
              >
                <ReviewIcon>
                  <FontAwesomeIcon icon={faFaceSmile} />
                </ReviewIcon>
                보통이에요
              </button>
            </li>
            <li>
              <button
                onClick={() => handleReviewSelection(3)}
                className={selectedReview === 3 ? "selected" : ""}
              >
                <ReviewIcon>
                  <FontAwesomeIcon icon={faFaceRollingEyes} />
                </ReviewIcon>
                취향이아니에요
              </button>
            </li>
          </ReviewModalbox>
          <ReviewModalButton>
            <ButtonOk onClick={handleReviewSubmit}>평점등록</ButtonOk>{" "}
            <ButtonCancel onClick={() => closeModal()}>취소</ButtonCancel>
          </ReviewModalButton>
          {showWarning && (
            <p style={{ color: "red", fontSize: "1.5rem" }}>
              평점을 선택해주세요.
            </p>
          )}
        </ModalText>
      )}
    </SellListModal>
  );
};

export default ReviewModal;
