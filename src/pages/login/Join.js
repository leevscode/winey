/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/

import React, { useState } from "react";
import { Radio, Form, Input, ConfigProvider, Modal } from "antd";

import {
  ButtonConfirm,
  ConfirmArray,
  JoinWrap,
  RegionSelectWrap,
} from "../../style/JoinStyle";
import { ButtonOk } from "../../style/GlobalStyle";
import { Terms } from "../../components/join/Terms";

const Join = () => {
  const regionOptions = [
    "서울",
    "경기",
    "인천",
    "강원",
    "충남",
    "대전",
    "충북",
    "경북",
    "대구",
    "전북",
    "광주",
    "전남",
    "경남",
    "울산",
    "부산",
    "제주",
  ];

  // 아이디 중복 확인 핸들러
  const handleCertifyID = () => {
    Modal.info({
      title: "아이디 중복확인",
      content: <div>기능 추가 필요</div>,
      onOk() {},
    });
  };
  // 본인 인증 핸들러
  const handleCertifyPhone = () => {
    Modal.success({
      title: "본인 인증",
      content: <div>본인인증이 완료되었습니다.</div>,
      onOk() {},
    });
  };

  // 회원 가입 핸들러
  const onFinish = values => {
    console.log("Success:", values);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <JoinWrap>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#79213d",
          },
        }}
      >
        <Form
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <span>
            아이디(E-mail)<b>*</b>
          </span>
          <p>사용하실 아이디를 이메일 형식으로 입력해 주세요.</p>
          <ConfirmArray>
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
              ]}
            >
              <Input
                size="large"
                // 글자수 제한
                maxLength={25}
                placeholder="아이디를 입력해 주세요."
              />
            </Form.Item>
            <ButtonConfirm onClick={handleCertifyID}>중복확인</ButtonConfirm>
          </ConfirmArray>

          <span>
            비밀번호<b>*</b>
          </span>
          <p>비밀번호를 입력해 주세요.</p>
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
              size="large"
              // 글자수 제한
              maxLength={25}
              placeholder="비밀번호를 입력해 주세요."
            />
          </Form.Item>

          <span>
            비밀번호 확인<b>*</b>
          </span>
          <p>비밀번호를 다시 한번 입력해 주세요.</p>
          <Form.Item
            name="passwordConfirm"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              // 글자수 제한
              maxLength={25}
              placeholder="비밀번호를 다시 한번 입력해 주세요"
            />
          </Form.Item>

          <span>
            이름<b>*</b>
          </span>
          <p>이름을 입력해 주세요</p>
          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              size="large"
              // 글자수 제한
              maxLength={10}
              placeholder="이름을 입력해 주세요."
            />
          </Form.Item>

          <span>
            연락처<b>*</b>
          </span>
          <p>연락처를 숫자 형식으로 입력해 주세요.</p>
          <ConfirmArray>
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  type: "tel",
                  message: "The input is not valid phone number!",
                },
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                size="large"
                // 글자수 제한
                maxLength={15}
                placeholder="연락처를 입력해 주세요."
              />
            </Form.Item>
            <ButtonConfirm onClick={handleCertifyPhone}>본인인증</ButtonConfirm>
          </ConfirmArray>
          <RegionSelectWrap>
            <span>
              거주지역<b>*</b>
            </span>
            <p>거주지역을 선택해 주세요.</p>
            <Form.Item name="userCity">
              <Radio.Group value="서울" size="large">
                {regionOptions.map(option => (
                  <Radio.Button key={option} value={option}>
                    {option}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Form.Item>
          </RegionSelectWrap>
          {/* 이용약관 컴포넌트 */}
          <Terms />
          <Form.Item>
            <ButtonOk>회원가입</ButtonOk>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </JoinWrap>
  );
};

export default Join;
