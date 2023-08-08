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

// 회원정보수정
export const patchMemberInfo = async editUserInfo => {
  try {
    const res = await axios.patch("/upduser", {
      // "email": "string",
      // email: "test4@test.net",
      name: editUserInfo.editUserName,
      tel: editUserInfo.editUserTel,
      regionNmId: editUserInfo.editUserCity,
    });
    console.log(res);
    const result = await res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// 비번수정
export const patchMemberPW = async editUserInfo => {
  try {
    const res = await axios.patch("/updPassword", {
      pw: editUserInfo.editpassword,
    });
    console.log(res);
    const result = await res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
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
