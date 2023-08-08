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
    userId: "kimwine1111",
    userName: "김와인",
    userPhoneNum: "123-456-7890",
    userCity: "대구",
  };

  //변경 회원정보를 담는 state
  const [editUserInfo, setEditUserInfo] = useState([]);

  // 아이디, 이름, 전화번호 변경 state
  const [editId] = useState(초기데이터.userId);
  const [editUserName, setEditUserName] = useState(초기데이터.userName);
  const [editUserTel, setEditUserTel] = useState(초기데이터.userPhoneNum);
  const [editUserCity, setEditUserCity] = useState(초기데이터.userCity);

  //password 유효성 검증 state
  const [editpassword, setEditPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  // 지역옵션
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

  // 본인 인증 핸들러
  const handleCertifyPhone = () => {
    Modal.success({
      title: "본인 인증",
      content: <div>본인인증이 완료되었습니다.</div>,
      onOk() {},
    });
  };

  // 아이디 수정
  // const handleEditId = e => {
  //   setEditId(e.target.value);
  //   console.log("editId", editId);
  // };
  // 닉네임 수정
  const handleEditUserName = e => {
    setEditUserName(e.target.value);
    console.log("editUserName", editUserName);
  };
  // 전화번호 수정
  const handleEditUserTel = e => {
    setEditUserTel(e.target.value);
    console.log("editUserTel", editUserTel);
  };
  // 지역 수정
  const handleEditUserCity = e => {
    setEditUserCity(e.target.value);
    console.log("editUserTel", editUserCity);
  };

  // password 유효성 관련 핸들러
  const changePassword = e => {
    setEditPassword(e.target.value);
    setPasswordError(e.target.value !== passwordConfirm);
  };
  const changePasswordConfirm = e => {
    setPasswordConfirm(e.target.value);
    setPasswordError(e.target.value !== editpassword);
  };

  // 회원정보수정 확인 핸들러
  const onFinish = values => {
    if (editpassword === passwordConfirm) {
      setEditUserInfo({
        // editId,
        editpassword,
        editUserName,
        editUserTel,
        editUserCity,
      });
      console.log("editUserInfo", editUserInfo);
      // navigate("/main");
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
    navigate("/main");
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
          // 디폴트 값
          initialValues={{
            userId: editId,
            userName: editUserName,
            phoneNumber: editUserTel,
            userCity: editUserCity,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical" >
          <span>
            아이디(E-mail)<b>*</b>
          </span>
          <p>사용하실 아이디를 입력해 주세요.</p>
          <Form.Item
            name="userId"
            rules={[
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              size="large"
              // 읽기전용
              readOnly={true}
            />
          </Form.Item>
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
              maxLength={20}
              placeholder="비밀번호를 입력해 주세요."
              value={editpassword}
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
              maxLength={20}
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
              value={editUserName}
              onChange={handleEditUserName}
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
                  pattern: /^[0-9\-.]{1,14}$/,
                  message: "잘못된 형식입니다.",
                },
                {
                  required: true,
                  message: "연락처를 입력해 주세요.",
                },
              ]}
            >
              <Input
                size="large"
                // 글자수 제한
                maxLength={15}
                placeholder="연락처를 입력해 주세요."
                value={editUserTel}
                onChange={handleEditUserTel}
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
              <Radio.Group 
              // defaultValue={editUserCity} 
              size="large">
                {regionOptions.map(option => (
                  <Radio.Button
                    key={option}
                    value={option}
                    onChange={handleEditUserCity}
                  >
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
