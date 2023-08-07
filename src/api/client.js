import axios from "axios";
import { getCookie, setCookie } from "./cookie";
import { Modal } from "antd";

export const client = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

// Request 처리
axios.interceptors.request.use(
  config => {
    // cookie를 활용 한 경우
    const token = getCookie("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => console.log(error),
);

// 쿠키 set 하기
export const fetchLogin = async (userid, password) => {
  try {
    const res = await client.post(`/sign-api/sign-in`, {
      email: userid,
      pw: password,
    });
    console.log(res.data);
    const result = await res.data;
    setCookie("refreshToken", result.refreshToken, {
      path: "/",
      secure: true,
      sameSite: "none",
      httpOnly: true,
    });
    setCookie("accessToken", result.accessToken, {
      path: "/",
      secure: true,
      sameSite: "none",
      httpOnly: true,
    });
    return result;
    // axios.get(`/api/mypage/user_mypage?userId=2`);
  } catch (error) {
    console.log(error);
    const config = {
      title: "로그인 실패",
      content: <p>아이디/패스워드를 다시 확인해 주세요.</p>,
    };
    Modal.warning(config);

    return error;
  }
};
