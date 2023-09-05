import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";
import { useNavigate } from "react-router";

export const client = axios.create({
  // baseURL: "http://localhost:3000",
  // baseURL: "192.168.0.144:5004/",
  // timeout: 50000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

// Request 처리
client.interceptors.request.use(
  config => {
    // cookie를 활용 한 경우
    const token = getCookie("accessToken");
    // const token = getCookie("refresh_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => console.log(error),
);

// Response 처리
// client.interceptors.response.use(
//   response => {
//     console.log("response", response);
//     return response;
//   },
//   async error => {
//     console.log("error response", error);
//     console.log("err.response.statuss", error.response.status);
//     const { config, response } = error;
//     const refreshToken = getCookie("refreshToken");
//     if (response.status === 401 && refreshToken) {
//       console.log("토큰만료, 갱신시도");
//       try {
//         const { data } = await client.post(`/sign-api/refresh-token`, {
//           refreshToken,
//         });
//         const accessToken = data;
//         setCookie("accessToken", accessToken);
//         console.log(accessToken);
//         config.headers.Authorization = `Bearer ${accessToken}`;

//         // 토큰 갱신 후 재시도
//         const reTryResponse = await client(config);
//         return reTryResponse;
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     return Promise.reject(error);
//   },
// );

// 쿠키 set 하기
export const fetchLogin = async (userid, password) => {
  try {
    const res = await client.post(`/sign-api/sign-in`, {
      email: userid,
      upw: password,
    });
    const result = res.data;
    setCookie("refresh_token", result.authResVo.refreshToken, {
      path: "/",
      secure: true,
      sameSite: "none",
      httpOnly: true,
    });
    setCookie("accessToken", result.authResVo.accessToken, {
      path: "/",
      secure: true,
      sameSite: "none",
      httpOnly: true,
    });
    console.log("res", res);
    return result;
  } catch (error) {
    console.log("login error", error.response);
    return error;
  }
};

// 토큰 갱신 함수
// export const fetchRefreshToken = async () => {
//   console.log("리프레쉬토큰 호출");
//   try {
//     const res = await axios.post(`/sign-api/refresh-token`, {
//       refreshToken: getCookie("refreshToken"),
//     });
//     const result = res.data;
//     if (result.success) {
//       setCookie("accessToken", result.accessToken, {
//         path: "/",
//         secure: true,
//         sameSite: "none",
//         httpOnly: true,
//       });
//       setCookie("refreshToken", result.refreshToken, {
//         path: "/",
//         secure: true,
//         sameSite: "none",
//         httpOnly: true,
//       });
//       return result;
//       // processFailedQueue(null, result);
//     } else {
//       console.log("토큰갱신실패");
//       // 갱신 실패 시, 안내창 띄우고 로그인창으로 이동
//       alert("로그아웃 되었습니다");
//       removeCookie("accessToken");
//       removeCookie("refreshToken");
//     }
//   } catch (error) {
//     // processFailedQueue(error, null);
//     console.log(error);
//     // 갱신 실패 시, 안내창 띄우고 로그인창으로 이동
//     alert("로그아웃 되었습니다");
//     removeCookie("accessToken");
//     removeCookie("refreshToken");
//   }
// };
