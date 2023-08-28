/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React from "react";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faUsersGear, faWineBottle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LayoutIntroWrap } from "../style/AdminLayoutStyle";
import { Link, useOutletContext } from "react-router-dom";

function AdminIntro() {
  const listPathName = useOutletContext();
  // console.log("listPathName 불러옵니다.", listPathName);
  return (
    <LayoutIntroWrap>
      <ul>
        <li>
          <div>
            <i>
              <FontAwesomeIcon icon={faUsersGear} />
            </i>
            <Link to="/admin/membercontrol">회원관리</Link>
          </div>
        </li>
        <li>
          <div>
            <i>
              <FontAwesomeIcon icon={faFolderOpen} />
            </i>
            <Link to="/admin/ordercontrol">주문관리</Link>
          </div>
        </li>
        <li>
          <div>
            <i>
              <FontAwesomeIcon icon={faWineBottle} />
            </i>
            <Link to="/admin/productlist">상품관리</Link>
          </div>
        </li>
      </ul>
    </LayoutIntroWrap>
  );
}

export default AdminIntro;
