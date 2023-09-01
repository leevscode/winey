import React from "react";
import { AboutWrap } from "../style/AboutStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <AboutWrap>
      {/* 프론트엔드 */}
      <h3>FRONT-END</h3>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/front_01.jpg`}
          alt="back1"
        />
        <ul>
          <li>
            <span>이름</span> : 김아영
          </li>
          <li>
            <span>담당파트</span> : 로고 제작 및 사용자 페이지, 디자인 작업,
            전반적인 프로젝트 기본 셋팅, 인트로 & 성인인증 페이지, 헤더 및 푸터
            컴포넌트 네비게이션 메뉴, 마이페이지 컴포넌트, 메인 페이지, 상품
            리스트 페이지, 상품 상세 페이지, 와인가이드 페이지, Not found 페이지
          </li>
          <li>
            <span>한마디</span> : 😀나름 최선을 다 했습니다!😀
          </li>
          <li>
            <Link to="https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0">
              <img src="https://img.shields.io/badge/notion-ffffff?style=for-the-badge&logo=notion&logoColor=000000" />
            </Link>
            <Link to="https://github.com/kimaydev">
              <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/front_02.jpg`}
          alt="back1"
        />
        <ul>
          <li>
            {" "}
            <span>이름</span> : 최혜미
          </li>
          <li>
            <span>담당파트</span> : 로그인, 회원가입, 회원정보수정, 선호키워드
            선택, 결제, 결제완료 페이지
          </li>
          <li>
            <span>한마디</span> : 🌻행복합니다^^🌼
          </li>
          <li>
            <Link to="https://www.notion.so/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4">
              <img src="https://img.shields.io/badge/notion-ffffff?style=for-the-badge&logo=notion&logoColor=000000" />
            </Link>{" "}
            <Link to="https://github.com/hyemdev">
              <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/front_03.jpg`}
          alt="back1"
        />
        <ul>
          <li>
            {" "}
            <span>이름</span> : 이동은
          </li>
          <li>
            <span>담당파트</span> : 주문내역, 주문상세 페이지, 장바구니,
            리뷰등록
          </li>
          <li>
            <span>한마디</span> : 🐸 버.튼.싫.어 🐸
          </li>
          <li>
            <Link to="https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284">
              <img src="https://img.shields.io/badge/notion-ffffff?style=for-the-badge&logo=notion&logoColor=000000" />
            </Link>
            <Link to="https://github.com/leevscode">
              <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />
            </Link>
          </li>
          <li></li>
        </ul>
      </div>
      {/* 백엔드 */}
      <h3>BACK-END</h3>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/back_01.jpg`} alt="back1" />
        <ul>
          <li>
            {" "}
            <span>이름</span> : 정우진
          </li>
          <li>
            <span>담당파트</span> : 회원가입 로그인 , 로그아웃 회원 맞춤 상품
            추천 회원정보 변경,출력 및 탈퇴 시큐리티, Token, 유효성 검사
          </li>
          <li>
            <span>한마디</span> : 그냥 아무거나 먹자...🍷
          </li>
          <li>
            <Link to="https://www.notion.so/40559df6ba0f462ba721584d4ec536ac?pvs=4">
              <img src="https://img.shields.io/badge/notion-ffffff?style=for-the-badge&logo=notion&logoColor=000000" />
            </Link>
            <Link to="https://github.com/JungWooojin">
              {" "}
              <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/back_05.jpg`} alt="back1" />
        <ul>
          <li>
            {" "}
            <span>이름</span> : 김원희
          </li>
          <li>
            <span>담당파트</span> : 메인페이지 list, api 데이터 추출, url 이미지
            다운로드
          </li>
          <li>
            <span>한마디</span> :{" "}
          </li>
          <li>
            <Link to="https://www.notion.so/43f51685062a442294fb1bf79c66dc21?pvs=4">
              <img src="https://img.shields.io/badge/notion-ffffff?style=for-the-badge&logo=notion&logoColor=000000" />
            </Link>
            <Link to="https://github.com/wonyy97">
              <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/back_02.jpg`} alt="back1" />
        <ul>
          <li>
            {" "}
            <span>이름</span> : 배서윤
          </li>
          <li>
            <span>담당파트</span> : 상품 상세 페이지 주문 내역, 주문 상세 내역
            픽업 완료 처리, 주문 취소 처리
          </li>
          <li>
            <span>한마디</span> :{" "}
          </li>
          <li>
            <Link to="https://www.notion.so/bd559f487c284b4490031935a2dc31cf?pvs=4">
              <img src="https://img.shields.io/badge/notion-ffffff?style=for-the-badge&logo=notion&logoColor=000000" />
            </Link>
            <Link to="https://github.com/sybbb1111">
              <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/back_04.jpg`} alt="back1" />
        <ul>
          <li>
            <span>이름</span> : 하민수
          </li>
          <li>
            <span>담당파트</span> : 장바구니, 결제
          </li>
          <li>
            <span>한마디</span> :{" "}
          </li>
          <li>
            <Link to=" https://www.notion.so/ddafa956ff8a4acfa54ddd8c6512dc93">
              <img src="https://img.shields.io/badge/notion-ffffff?style=for-the-badge&logo=notion&logoColor=000000" />
            </Link>
            <Link to="https://github.com/HAMINSU123">
              <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/back_03.jpg`} alt="back1" />
        <ul>
          <li>
            <span>이름</span> : 최우기
          </li>
          <li>
            <span>담당파트</span> : 관리자 페이지
          </li>
          <li>
            <span>한마디</span> : 안녕하세요 🙂
          </li>
          <li>
            <Link to="https://github.com/wwwgggx3">
              {" "}
              <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />
            </Link>
          </li>
        </ul>
      </div>
    </AboutWrap>
  );
};

export default About;
