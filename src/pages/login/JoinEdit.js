/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import { JoinWrap } from "../../style/JoinStyle";
import JoinEditForm from "../../components/join/JoinEditForm";
import { useSelector } from "react-redux";

const JoinEdit = () => {
  const editUserInfo = useSelector(state => state.user);

  useEffect(() => {}, []);

  // 데이터가 다 get되면 화면을 그리자~
  const isRendering = Object.keys(editUserInfo).length > 0;

  return (
    <JoinWrap>
      {isRendering && (
        //화면
        <JoinEditForm
        // editUserInfo={editUserInfo}
        // setEditUserInfo={setEditUserInfo}
        />
      )}
    </JoinWrap>
  );
};

export default JoinEdit;
