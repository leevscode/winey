import React from "react";
import { Radio, Form, Input } from "antd";

import { ButtonConfirm, JoinWrap, RegionSelect, RegionSelectWrap } from "../../style/JoinStyle";
import { ButtonOk } from "../../style/GlobalStyle";

const Join = () => {
  const onFinish = values => {
    console.log("Success:", values);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <JoinWrap>
      <Form
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <span>아이디(E-mail)</span>
        <p>사용하실 아이디를 이메일 형식으로 입력해 주세요</p>
        <Form.Item
          name="userEmail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
            {
              pattern: /^[\s]/,
              message: "Please do not use space",
            },
          ]}
        >
          <Input size="large" />
          <ButtonConfirm>중복확인</ButtonConfirm>
        </Form.Item>

        <span>비밀번호</span>
        <p>비밀번호를 입력해 주세요</p>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <span>비밀번호 확인</span>
        <p>비밀번호를 다시 한번 입력해 주세요</p>
        <Form.Item
          name="passwordConfirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!"),
                );
              },
            }),
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <span>이름</span>
        <p>이름을 입력해 주세요</p>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>

        <span>연락처</span>
        <p>연락처를 숫자 형식으로 입력해 주세요</p>
        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input size="large" /> <ButtonConfirm>본인인증</ButtonConfirm>
        </Form.Item>
        <RegionSelectWrap>
          <Form.Item>
            <Radio.Group defaultValue="a" size="large">
              <Radio.Button value="서울">서울</Radio.Button>
              <Radio.Button value="경기">경기</Radio.Button>
              <Radio.Button value="인천">인천</Radio.Button>
              <Radio.Button value="강원">강원</Radio.Button>
              <Radio.Button value="충남">충남</Radio.Button>
              <Radio.Button value="대전">대전</Radio.Button>
              <Radio.Button value="충북">충북</Radio.Button>
              <Radio.Button value="경북">경북</Radio.Button>
              <Radio.Button value="대구">대구</Radio.Button>
              <Radio.Button value="전북">전북</Radio.Button>
              <Radio.Button value="광주">광주</Radio.Button>
              <Radio.Button value="전남">전남</Radio.Button>
              <Radio.Button value="경남">경남</Radio.Button>
              <Radio.Button value="울산">울산</Radio.Button>
              <Radio.Button value="부산">부산</Radio.Button>
              <Radio.Button value="제주">제주</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </RegionSelectWrap>
        <Form.Item>
          <ButtonOk>회원가입</ButtonOk>
        </Form.Item>
      </Form>
    </JoinWrap>
  );
};

export default Join;
