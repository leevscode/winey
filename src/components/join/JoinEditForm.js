/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect } from "react";
import { Radio, Form, Input, ConfigProvider, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

import {
  ButtonConfirm,
  ConfirmArray,
  JoinEditBtn,
  JoinWrap,
  RegionSelectWrap,
} from "../../style/JoinStyle";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import { useState } from "react";
import { removeCookie } from "../../api/cookie";
import {
  deleteMember,
  getMemberInfo,
  patchMemberInfo,
  patchMemberPW,
} from "../../api/joinpatch";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const JoinEditForm = () => {
  const dispatch = useDispatch();
  const editUserInfo = useSelector(state => state.user);

  // 지역옵션
  const regionOptions = [
    { regionNmId: 1, value: "서울" },
    { regionNmId: 2, value: "부산" },
    { regionNmId: 3, value: "대구" },
    { regionNmId: 4, value: "인천" },
    { regionNmId: 5, value: "광주" },
    { regionNmId: 6, value: "대전" },
    { regionNmId: 7, value: "울산" },
    { regionNmId: 8, value: "세종" },
    { regionNmId: 9, value: "경기" },
    { regionNmId: 10, value: "강원" },
    { regionNmId: 11, value: "충북" },
    { regionNmId: 12, value: "충남" },
    { regionNmId: 13, value: "전북" },
    { regionNmId: 14, value: "전남" },
    { regionNmId: 15, value: "경북" },
    { regionNmId: 16, value: "경남" },
    { regionNmId: 17, value: "제주" },
  ];

  const navigate = useNavigate();

  // 아이디, 이름, 전화번호 변경 state
  const [editId] = useState(editUserInfo.email);

  const [editUserName, setEditUserName] = useState(editUserInfo.nm);
  const [editUserTel, setEditUserTel] = useState(editUserInfo.tel);
  const [editUserCity, setEditUserCity] = useState(editUserInfo.regionNmId);

  //password 유효성 검증 state
  const [editpassword, setEditPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  // 닉네임 수정
  const handleEditUserName = e => {
    setEditUserName(e.target.value);
    console.log("tel", e.target.value);
  };
  // 전화번호 수정
  const handleEditUserTel = e => {
    setEditUserTel(e.target.value);
    console.log("tel", e.target.value);
  };
  // 지역 수정
  const handleEditUserCity = e => {
    setEditUserCity(e.target.value);
    console.log("city", e.target.value);
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
    setEditPassword(e.target.value);
    setPasswordError(e.target.value !== passwordConfirm);
  };
  const changePasswordConfirm = e => {
    setPasswordConfirm(e.target.value);
    setPasswordError(e.target.value !== editpassword);
  };
  console.log("editpassword", editpassword);

  // 회원정보수정 확인 핸들러
  const onFinish = values => {
    if (editpassword === passwordConfirm) {
      const update = {
        editId,
        editpassword,
        editUserName,
        editUserTel,
        editUserCity,
      };
      if (editpassword === "") {
        Modal.warning({
          title: "비밀번호 확인",
          content: <p>비밀번호를 다시 확인해 주세요.</p>,
        });
        console.log("비밀번호확인");
      } else {
        patchMemberInfo(update);
        patchMemberPW(update);
        navigate("/main");
      }
    } else {
      console.log("Failed");
    }
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  // 회원탈퇴 핸들러
  const UserDropOut = () => {
    Modal.confirm({
      title: "회원탈퇴",
      icon: <ExclamationCircleFilled />,
      content: "정말 탈퇴 하시겠습니까?",
      onOk() {
        deleteMember();
        removeCookie("accessToken");
        removeCookie("refreshToken");
        navigate("/main");
        console.log("회원탈퇴");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  //
  useEffect(() => {
    dispatch(getMemberInfo());
  }, []);
  return (
    <div>
      {" "}
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
            password: editpassword,
            userName: editUserName,
            phoneNumber: editUserTel,
            regionNmId: editUserCity,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <span>
            아이디(E-mail)<b>*</b>
          </span>
          <p>사용하실 아이디를 입력해 주세요.</p>
          <Form.Item
            name="userId"
            rules={[
              {
                required: true,
                message: "이메일을 입력해주세요",
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
                message: "비밀번호를 입력해 주세요.",
              },
            ]}
            validateStatus={passwordError ? "error" : ""}
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
                message: "비밀번호를 입력해 주세요.",
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
                message: "이름을 입력해 주세요.",
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
                  pattern: /^[0-9]+$/,
                  message: "숫자만 입력해 주세요.",
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
                maxLength={11}
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
            <Form.Item name="regionNmId">
              <Radio.Group
                value={regionOptions.regionNmId}
                size="large"
                onChange={e => handleEditUserCity(e)}
              >
                {regionOptions.map(option => (
                  <Radio.Button
                    key={option.regionNmId}
                    value={option.regionNmId}
                  >
                    {option.value}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Form.Item>
          </RegionSelectWrap>
          {/* 이용약관 컴포넌트
    <Terms /> */}
          <Form.Item>
            <JoinEditBtn>
              <ButtonOk>수정하기</ButtonOk>
              <ButtonCancel onClick={UserDropOut}>회원탈퇴</ButtonCancel>
            </JoinEditBtn>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default JoinEditForm;
