/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FooterWrap, NoticeModal } from "../style/GlobalComponents";

const Footer = () => {
  // 검색 모달 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <FooterWrap>
        <ul>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo_footer.svg`}
              alt="로고"
            />
            <ol>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </li>
          <li>
            {/* <Link to="/about" >만든 사람들</Link> */}
            <button onClick={showModal}>만든 사람들</button>
          </li>
          <li>
            <p>
              Product by.<span>PODOJect</span>
            </p>
          </li>
        </ul>
      </FooterWrap>
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

export default Footer;
