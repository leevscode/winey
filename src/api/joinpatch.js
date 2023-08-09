import axios from "axios";

// 회원가입
export const postUserJoin = async userInfo => {
  try {
    const res = await axios.post("/sign-api/sign-up", {
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

// 회원정보 get(정보수정페이지 사용)
export const getMemberInfo = async setEditUserInfo => {
  try {
    const res = await axios.get("/api");
    const result = await res.data;
    console.log("result", result);
    setEditUserInfo(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 회원정보수정 patch
export const patchMemberInfo = async editUserInfo => {
  try {
    const res = await axios.patch("/api/upduser", {
      email: editUserInfo.email,
      name: editUserInfo.editUserName,
      tel: editUserInfo.editUserTel,
      regionNmId: editUserInfo.editUserCity,
    });
    const result = await res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// 비번수정
export const patchMemberPW = async editUserInfo => {
  try {
    const res = await axios.patch("/api/updPassword", {
      pw: editUserInfo.editpassword,
    });
    const result = await res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 회원탈퇴 delete
export const deleteMember = async () => {
  try {
    const res = await axios.delete("/");
    console.log("res", res);
    const result = await res.data;
    console.log("회원삭제성공", result);
  } catch (error) {
    console.log("del, Err", error);
  }
};

export const postLogout = async () => {
  try {
    const res = await axios.post("/sign-api/logout");
    console.log(res);
    const data = await res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
