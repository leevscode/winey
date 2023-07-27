/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/

import React from "react";
import { ConfigProvider, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { FormWrap, LoginWrap, LogoDiv } from "../../style/LoginStyle";
import { Link, useNavigate } from "react-router-dom";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = values => {
    console.log("Success:", values);
    navigate("/");
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
              name="userEmail"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                // 글자수 제한
                maxLength={25}
                size="large"
                placeholder="아이디를 입력해 주세요. (example@winey.com)"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                // 글자수 제한
                maxLength={25}
                size="large"
                placeholder="비밀번호를 입력해 주세요"
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
