import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { setCookie } from "../../api/cookie";

// const REST_API_KEY = "63c2ccf48233929cf35206dbb6fcdb14";
// const REDIRECT_URI = "http://192.168.0.144:5004/oauth/main";

const [searchParams, setSearchParams] = useSearchParams();
const kakaocode = searchParams.get("access_Token");

const kakaoLogin = async () => {
  try {
    setCookie("kakaoToken", kakaocode, {
      path: "/",
      secure: true,
      sameSite: "none",
      httpOnly: true,
    });
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  kakaoLogin();
}, {});

const KakaoLogin = () => {
  console.log(window.location.search);
  //   window.location.href = `https://kauth.kakao.com/oauth2/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return navigator("/main");
};

export default KakaoLogin;
