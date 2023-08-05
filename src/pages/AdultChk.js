import React, { useState } from "react";
import { useNavigate } from "react-router";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LayoutWrap } from "../style/LayoutStyle";
import { AdultChkWrap } from "../style/IntroStyle";
import { ButtonCancel, ButtonOk } from "../style/GlobalStyle";
import { NoticeModal } from "../style/GlobalComponents";

const AdultChk = () => {
  const navigate = useNavigate();
  // 검색 모달 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleMain = () => {
    navigate("/main");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <LayoutWrap>
        {/* 성인인증 화면 */}
        <AdultChkWrap
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2,
          }}
        >
          <div>
            <ul>
              <li>
                <i>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                </i>
                당신은 만 19세 이상 음주 가능한 연령입니까?
              </li>
              <li>
                <ButtonOk onClick={handleMain}>예</ButtonOk>
                <ButtonCancel onClick={showModal}>아니오</ButtonCancel>
              </li>
              <li>* 이 사이트는 만 19세 이상만 입장 가능합니다.</li>
            </ul>
          </div>
          <img src={`${process.env.PUBLIC_URL}/images/logo_2.svg`} alt="로고" />
        </AdultChkWrap>
      </LayoutWrap>
      {/* 성인인증 아니오 모달창 */}
      <NoticeModal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <p>
          <i>
            <FontAwesomeIcon icon={faCircleExclamation} />
          </i>
          만 19세 미만은 이용하실 수 없습니다.
        </p>
      </NoticeModal>
    </>
  );
};

export default AdultChk;
