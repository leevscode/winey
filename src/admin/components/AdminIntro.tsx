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

function AdminIntro() {
  return (
    <LayoutIntroWrap>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUsersGear} />
          <div>회원관리 바로가기</div>
        </li>
        <li>
          <FontAwesomeIcon icon={faFolderOpen} />
          <div>주문관리 바로가기</div>
        </li>
        <li>
          <FontAwesomeIcon icon={faWineBottle} />
          <div>상품관리 바로가기</div>
        </li>
      </ul>
    </LayoutIntroWrap>
  );
}

export default AdminIntro;
