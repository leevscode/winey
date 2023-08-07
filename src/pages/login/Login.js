/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/

import React, { useState } from "react";
import { ConfigProvider, Form, Input, Modal, Result } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { FormWrap, LoginWrap, LogoDiv } from "../../style/LoginStyle";
import { Link, useNavigate } from "react-router-dom";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import { fetchLogin } from "../../api/client";

const Login = () => {
  // 아이디, 비밀번호
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  
  const config = {
    title: "로그인 실패",
    content: <p>아이디/패스워드를 다시 확인해 주세요.</p>,
  };

  const navigate = useNavigate();

  const handleLoginID = e => {
    setUserId(e.target.value);
  };
  const handleLoginPW = e => {
    setPassword(e.target.value);
  };

  const onFinish = async values => {
    try {
      const login = await fetchLogin(userid, password);
      navigate("/main");
    } catch (error) {
      Modal.warning(config);
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
                placeholder="아이디를 이메일 형식으로 입력해 주세요."
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
    </LoginWrap>
  );
};

export default Login;
