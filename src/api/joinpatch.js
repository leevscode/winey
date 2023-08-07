import axios from "axios";

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
