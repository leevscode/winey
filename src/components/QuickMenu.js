/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { NavLink } from "react-router-dom";
import { QuickWrap, ScrollTopBtn } from "../style/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faHashtag,
  faHouseChimney,
  faUser,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";

const QuickMenu = ({ handlerOpenNav }) => {
  return (
    <>
      <ScrollTopBtn>
        <button>
          <i>
            <FontAwesomeIcon icon={faArrowUp} />
          </i>
        </button>
      </ScrollTopBtn>
      <QuickWrap>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              <i>
                <FontAwesomeIcon icon={faHouseChimney} />
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/keywordselectedit"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              <i>
                <FontAwesomeIcon icon={faHashtag} />
              </i>
            </NavLink>
          </li>
          <li>
            <button onClick={handlerOpenNav}>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon_navbtn_1.svg`}
                alt="메뉴보기"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/icon_navbtn_3.svg`}
                alt="메뉴보기"
              />
            </button>
          </li>
          <li>
            <NavLink
              to="/windeguide"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              <i>
                <FontAwesomeIcon icon={faWineGlass} />
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mypageList"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
            </NavLink>
          </li>
        </ul>
      </QuickWrap>
    </>
  );
};

export default QuickMenu;
