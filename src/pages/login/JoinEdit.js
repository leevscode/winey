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
  JoinEditBtn,
  JoinWrap,
  RegionSelectWrap,
} from "../../style/JoinStyle";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import { Terms } from "../../components/join/Terms";
import { useNavigate } from "react-router-dom";

const JoinEdit = () => {
  const navigate = useNavigate();
  // 회원정보 더미데이터
  const 초기데이터 = {
    userId: "kimwine@red.com",
    userName: "Kimwine",
    userPhoneNum: "123-456-789",
    userCity: "대구",
  };
  //이전 회원정보 불러오기
  const [savedUserInfo, setSavedUserInfo] = useState(초기데이터);

  //변경 회원정보를 담는 state
  const [editUserInfo, setEditUserInfo] = useState([]);

  //password 유효성 검증 state
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState(false);

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

  // password 유효성 관련 핸들러
  const changePassword = e => {
    setPassword(e.target.value);
    setPasswordError(e.target.value !== passwordConfirm);
  };
  const changePasswordConfirm = e => {
    setPasswordConfirm(e.target.value);
    setPasswordError(e.target.value !== password);
  };

  // 회원 가입 핸들러
  const onFinish = values => {
    if (password === passwordConfirm) {
      console.log("Success:", values);
      console.log("Success:", editUserInfo);
      navigate("/");
    } else {
      console.log("Failed");
    }
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  // 회원탈퇴 핸들러
  const UserDropOut = () => {
    console.log("회원탈퇴");
    navigate("/");
  };

  return (
    <JoinWrap>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#79213d",
            fontFamily:
              '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
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
                defaultValue={savedUserInfo.userId}
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
            validateStatus={passwordError ? "error" : ""}
            help={passwordError && "비밀번호가 일치하지 않습니다."}
          >
            <Input.Password
              size="large"
              // 글자수 제한
              maxLength={25}
              placeholder="비밀번호를 입력해 주세요."
              value={password}
              onChange={changePassword}
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
            validateStatus={passwordError ? "error" : ""}
            help={passwordError && "비밀번호가 일치하지 않습니다."}
          >
            <Input.Password
              size="large"
              // 글자수 제한
              maxLength={25}
              placeholder="비밀번호를 다시 한번 입력해 주세요"
              value={passwordConfirm}
              onChange={changePasswordConfirm}
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
              defaultValue={savedUserInfo.userName}
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
                defaultValue={savedUserInfo.userPhoneNum}
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
              <Radio.Group defaultValue={savedUserInfo.userCity} size="large">
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
            <JoinEditBtn>
              <ButtonOk>수정하기</ButtonOk>
              <ButtonCancel onClick={UserDropOut}>회원탈퇴</ButtonCancel>
            </JoinEditBtn>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </JoinWrap>
  );
};

export default JoinEdit;
