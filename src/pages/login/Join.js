import React, { useState } from "react";
import { Radio, Form, Input, ConfigProvider, Modal } from "antd";

import {
  ButtonConfirm,
  ConfirmArray,
  JoinWrap,
  RegionSelectWrap,
  TermsWarp,
} from "../../style/JoinStyle";
import { ButtonOk } from "../../style/GlobalStyle";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TermsInfo from "../../components/join/TermsInfo";
import PrivateInfo from "../../components/join/PrivateInfo";

const Join = () => {
  const [value, setValue] = useState(0);
  // 약관보기 모달창 관련
  const checkTerms = () => {
    Modal.info({
      title: "WINEY 이용약관",
      content: (
        <div>
          <TermsInfo />
        </div>
      ),
      onOk() {},
    });
  };
  const checkedPrivate = () => {
    Modal.info({
      title: "WINEY 개인정보 처리방침",
      content: (
        <div>
          <PrivateInfo />
        </div>
      ),
      onOk() {},
    });
  };

  const onFinish = values => {
    console.log("Success:", values);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const onChange = e => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
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
          <p>사용하실 아이디를 이메일 형식으로 입력해 주세요</p>
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
                {
                  pattern: /^[\s]/,
                  message: "Please do not use space",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <ButtonConfirm>중복확인</ButtonConfirm>
          </ConfirmArray>

          <span>
            비밀번호<b>*</b>
          </span>
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

          <span>
            비밀번호 확인<b>*</b>
          </span>
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
                    new Error(
                      "The new password that you entered do not match!",
                    ),
                  );
                },
              }),
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <span>
            이름<b>*</b>
          </span>
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

          <span>
            연락처<b>*</b>
          </span>
          <p>연락처를 숫자 형식으로 입력해 주세요</p>
          <ConfirmArray>
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <ButtonConfirm>본인인증</ButtonConfirm>
          </ConfirmArray>
          <RegionSelectWrap>
            <span>
              거주지역<b>*</b>
            </span>
            <p>거주지역을 선택해 주세요</p>
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
      </ConfigProvider>
      <TermsWarp>
        <span>
          이용약관동의 <b>*</b>
        </span>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={"all"}>전체 동의합니다.</Radio>
          <Radio value={1}>이용약관 동의 (필수)</Radio>
          <span onClick={checkTerms}>
            약관보기
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
          <Radio value={2}>개인정보 수집·이용 동의 (필수)</Radio>
          <span onClick={checkedPrivate}>
            약관보기
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </Radio.Group>
      </TermsWarp>
    </JoinWrap>
  );
};

export default Join;
