/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import { JoinWrap } from "../../style/JoinStyle";
import { useNavigate } from "react-router-dom";
import { getMemberInfo } from "../../api/joinpatch";
import JoinEditForm from "../../components/join/JoinEditForm";
import { useDispatch, useSelector } from "react-redux";

const JoinEdit = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const editUserInfo = useSelector(state => state.user);

  //변경 회원정보를 담는 state
  // const [editUserInfo, setEditUserInfo] = useState("");
  // console.log(editUserInfo);

  // const getMemberInfoWait = async setEditUserInfo => {
  //   await getMemberInfo(setEditUserInfo);
  // };

  useEffect(() => {
    dispatch(getMemberInfo());
  }, []);

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
