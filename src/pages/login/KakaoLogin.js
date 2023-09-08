import React from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { setCookie } from "../../api/cookie";

// const REST_API_KEY = "63c2ccf48233929cf35206dbb6fcdb14";
// const REDIRECT_URI = "http://192.168.0.144:5004/oauth/main";

const KakaoLogin = () => {
  // const [searchParams, setSearchParams] = useSearchParams()
  const accessToken = window.location.search.replace("?access_token=", ""); //searchParams.get("access_Token");

  setCookie("access_token", accessToken);

  return <Navigate to="/main" />;
};

export default KakaoLogin;
