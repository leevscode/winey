/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { MypageWrap } from "../style/MypageStyle";
import { SectionLine } from "../style/GlobalStyle";

const MypageList = () => {
  return (
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
          <Link to="/about">
            만든 사람들
            <i>
              <FontAwesomeIcon icon={faAngleRight} />
            </i>
          </Link>
        </li>
        <li>
          <Link to="/opensource">
            오픈소스
            <i>
              <FontAwesomeIcon icon={faAngleRight} />
            </i>
          </Link>
        </li>
        <li>
          <button>로그아웃</button>
        </li>
      </ul>
    </MypageWrap>
  );
};

export default MypageList;
