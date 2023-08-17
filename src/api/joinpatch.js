/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { client } from "./client";
import { getUser } from "../reducers/userSlice";

// 회원가입
export const postUserJoin = async userInfo => {
  try {
    const res = await client.post("/sign-api/sign-up", {
      email: userInfo.email,
      pw: userInfo.password,
      role: "USER",
      nm: userInfo.nm,
      tel: userInfo.tel,
      regionNmId: userInfo.regionNmId,
    });
    console.log(res);
    const data = await res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// 회원정보 get redux toolkit
export const getMemberInfo = () => async dispatch => {
  try {
    const res = await client.get("/api/userinfo");
    const result = await res.data;
    // console.log("회원정보 get result", result);
    dispatch(getUser(result));
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 회원정보수정 patch
export const patchMemberInfo = async editUserInfo => {
  try {
    const res = await client.patch("/api/upduser", {
      pw: editUserInfo.editpassword,
      name: editUserInfo.editUserName,
      tel: editUserInfo.editUserTel,
      regionNmId: editUserInfo.editUserCity,
    });
    console.log("res", res);
    const result = await res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 회원탈퇴 delete
export const deleteMember = async () => {
  try {
    const res = await client.delete("/api/delUser");
    console.log("res", res);
    const result = await res.data;
    console.log("회원삭제성공", result);
  } catch (error) {
    console.log("del, Err", error);
  }
};

export const postLogout = async () => {
  try {
    const res = await client.post("/sign-api/logout");
    // console.log(res);
    const result = await res.data;
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
