import axios from "axios";

export const postUserJoin = async userInfo => {
  try {
    const res = await axios.post("/sign-api/sign-up", {userInfo});
    const data = await res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
