/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { MypageWrap } from "../style/MypageStyle";
import { SectionLine } from "../style/GlobalStyle";
import { postLogout } from "../api/joinpatch";
import { removeCookie } from "../api/cookie";
import { NoticeModal } from "../style/GlobalComponents";

const MypageList = () => {
  const navigate = useNavigate();
  // 검색 모달 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = e => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleLogout = async e => {
    e.preventDefault();
    await postLogout("");
    removeCookie("accessToken");
    removeCookie("refreshToken");
    console.log("로그아웃 실행");
    navigate("/main");
  };
  return (
    <>
      <MypageWrap>
        <div className="user-title">
          <h2>
            <span>고객이름</span>님
          </h2>
        </div>
        <SectionLine />
        <ul>
          <li>
            <Link to="/cart">
              장바구니
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </Link>
          </li>
          <li>
            <Link to="/selllist">
              주문 내역
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </Link>
          </li>
          <li>
            <Link to="/keywordselectedit">
              선호 키워드 변경
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </Link>
          </li>
          <li>
            <Link to="/windeguide">
              와인 가이드
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </Link>
          </li>
          <li>
            <Link to="/joinedit">
              정보수정
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </Link>
          </li>
        </ul>
        <SectionLine />
        <ul>
          <li>
            <Link to="/about" onClick={showModal}>
              만든 사람들
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </Link>
          </li>
          <li>
            <Link to="/opensource" onClick={showModal}>
              오픈소스
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </Link>
          </li>
          <li>
            <button onClick={handleLogout}>로그아웃</button>
          </li>
        </ul>
      </MypageWrap>
      {/* 준비중 모달창 */}
      <NoticeModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>
          <i>
            <FontAwesomeIcon icon={faCircleExclamation} />
          </i>
          준비중입니다.
        </p>
      </NoticeModal>
    </>
  );
};

export default MypageList;
