import React from "react";
import { Link } from "react-router-dom";
import { QuickWrap, ScrollTopBtn } from "../style/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faHashtag,
  faHouseChimney,
  faUser,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";

const QuickMenu = () => {
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
            <Link to="/">
              <i>
                <FontAwesomeIcon icon={faHouseChimney} />
              </i>
            </Link>
          </li>
          <li>
            <Link to="/keywordselectedit">
              <i>
                <FontAwesomeIcon icon={faHashtag} />
              </i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/images/icon_navbtn_3.svg`}
                alt="메뉴보기"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/icon_navbtn_1.svg`}
                alt="메뉴보기"
              />
            </Link>
          </li>
          <li>
            <Link to="/windeguide">
              <i>
                <FontAwesomeIcon icon={faWineGlass} />
              </i>
            </Link>
          </li>
          <li>
            <Link to="/mypageList">
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
            </Link>
          </li>
        </ul>
      </QuickWrap>
    </>
  );
};

export default QuickMenu;
