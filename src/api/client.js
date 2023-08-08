import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";
import { Modal } from "antd";
import { useNavigate } from "react-router";
import { Cookies } from "react-cookie";

export const client = axios.create({
  baseURL: "http://localhost:3000",
  // timeout: 50000,
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
    console.log("login완료", res.data);
    const result = res.data;
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
    // userPK 쿠키 저장
    //   setCookie("userPK", result.userPK, {
    //   path: "/",
    //   secure: true,
    //   sameSite: "none",
    //   httpOnly: true,
    // });

    // n분 후에 refreshToken 함수 호출
    // setInterval(refreshToken, 100000);
    // console.log("setInterval", setInterval);
    // console.log("refreshToken", refreshToken);
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

// 토큰 갱신 함수
export const fetchRefreshToken = async () => {
  const navigate = useNavigate();
  console.log("리프레쉬토큰 호출");
  try {
    const res = await axios.post(`/sign-api/refresh-token`, {
      refreshToken: getCookie("refreshToken"),
    });
    const result = res.data;
    console.log("갱신result", result);
    if (result.success) {
      setCookie("accessToken", result.accessToken, {
        path: "/",
        secure: true,
        sameSite: "none",
        httpOnly: true,
      });
      setCookie("refreshToken", result.refreshToken, {
        path: "/",
        secure: true,
        sameSite: "none",
        httpOnly: true,
      });

      // processFailedQueue(null, result);
    } else {
      console.log("토큰갱신실패");
      // 갱신 실패 시, 안내창 띄우고 로그인창으로 이동
      alert("로그아웃 되었습니다");
      removeCookie("accessToken");
      removeCookie("refreshToken");
      navigate("/login");
    }
  } catch (error) {
    // processFailedQueue(error, null);
    console.log(error);
    // 갱신 실패 시, 안내창 띄우고 로그인창으로 이동
    alert("로그아웃 되었습니다");
    removeCookie("accessToken");
    Cookies.remove("refreshToken");
    navigate("/login");
  }
};

// 토큰 갱신 후 실패한 요청을 저장하는 배열
// let failedQueue = [];

// 토큰 갱신 후 실패한 요청을 재시도하는 함수
// const processFailedQueue = (error, token = null) => {
//   failedQueue.forEach(prom => {
//     if (error) {
//       prom.reject(error);
//     } else {
//       prom.config.headers.Authorization = `Bearer ${token}`;
//       prom.resolve(client(prom.config));
//     }
//   });
//   failedQueue = [];
// };
