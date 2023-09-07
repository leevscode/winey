/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import { ConfigProvider, Form, Input, Modal, Result } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { FormWrap, LoginWrap, LogoDiv } from "../../style/LoginStyle";
import { Link, useNavigate } from "react-router-dom";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import { fetchLogin } from "../../api/client";
import { useDispatch, useSelector } from "react-redux";
import { getMemberInfo, postLogin } from "../../api/joinpatch";
import { cartLengthData } from "../../api/patchcart";
import { getUserFavoriteKey } from "../../api/keywordpatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const dispatch = useDispatch();
  // 회원정보 불러오기
  const userData = useSelector(state => state.user);
  // 장바구니 갯수 불러오기
  const cartData = useSelector(state => state.cart);
  // 아이디, 비밀번호
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // 에러 모달
  const viewErrorModal = error => {
    return {
      icon: (
        <i className="color_r">
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </i>
      ),
      okText: "확인",
      wrapClassName: "info-modal-wrap error-modal",
      maskClosable: true,
      title: "로그인 실패",
      content: error ? <p>{error}</p> : <p>네트워크 오류입니다.</p>,
    };
  };

  const navigate = useNavigate();

  const handleLoginID = e => {
    setUserId(e.target.value);
  };
  const handleLoginPW = e => {
    setPassword(e.target.value);
  };

  const onFinish = async () => {
    try {
      // const login = await fetchLogin(userid, password);
      const login = await fetchLogin(userid, password);
      console.log("login.roleType", login.roleType);
      if (login.roleType == "USER") {
        // 로그인성공 후 cookie에 있는 accessToken을 확인하자
        // 회원 정보 저장
        dispatch(getMemberInfo());
        cartLengthData(dispatch);

        // 선호키워드 정보 유무를 받아오자
        const favoriteKeyInfo = await getUserFavoriteKey();
        // 키워드 정보가 있으면 바로 메인으로, 없으면 키워드 선택 페이지로 가자
        if (favoriteKeyInfo.length > 0) {
          navigate("/main");
        } else {
          navigate("/keywordselect");
        }
      }
      if (login.roleType == "ADMIN") {
        navigate("/admin");
      } else {
        console.log("로그인에러메세지else", login.response.data.message);
        const errorConfig = viewErrorModal(login.response.data.message);
        Modal.warning(errorConfig);
      }
    } catch (error) {
      return;
    }
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LoginWrap>
      <LogoDiv>
        <img src={`${process.env.PUBLIC_URL}/images/logo_1.svg`} alt="로고" />
      </LogoDiv>
      <FormWrap>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#79213d",
            },
          }}
        >
          <Form
            name="login"
            layout="vertical"
            initialValues={
              {
                // remember: true,
              }
            }
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
          >
            <Form.Item
              name="userId"
              rules={[
                {
                  required: true,
                  message: "아이디를 입력해 주세요",
                },
                {
                  type: "email",
                  message: "이메일 형식으로 입력해 주세요",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                // 글자수 제한
                maxLength={20}
                size="large"
                placeholder="아이디를 입력해 주세요. (ex. example@example.com)"
                onChange={e => handleLoginID(e)}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "비밀번호를 입력해 주세요.",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                // 글자수 제한
                maxLength={20}
                size="large"
                placeholder="비밀번호를 입력해 주세요"
                onChange={e => handleLoginPW(e)}
              />
            </Form.Item>

            <Form.Item>
              <ButtonOk>로그인</ButtonOk>
            </Form.Item>
          </Form>
        </ConfigProvider>
      </FormWrap>
      <div>
        <Link to="/join">
          <ButtonCancel>회원가입</ButtonCancel>
        </Link>
      </div>
      <div>
        <a href="http://192.168.0.144:5004/oauth2/authorization/kakao?redirect_uri=http://192.168.0.144:5004/oauth/kakaoLogin">
          <div className="socialLogin">
            <img
              src={`${process.env.PUBLIC_URL}/images/kakao_login_medium_narrow.png`}
              alt="소셜로그인"
            />
          </div>
        </a>
      </div>
    </LoginWrap>
  );
};

export default Login;
