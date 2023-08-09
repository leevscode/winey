/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/
import { Button, ConfigProvider, Form, Input } from "antd";
import React from "react";
import { CertifyWrap } from "../../style/JoinStyle";
import { ButtonOk } from "../../style/GlobalStyle";

const CertifyEmail = ({ setEmailCertifyOk }) => {
  const onFinish = values => {
    setEmailCertifyOk(true);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <CertifyWrap>
      <p> 인증을 위해 이메일로 전송한 코드를 입력해 주세요.</p>
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          wrapperCol={{
            span: 30,
          }}
        >
          <Form.Item
            name="certifyEmail"
            rules={[
              {
                pattern: /\d+/g,
                message: "숫자형식으로 입력해주세요",
              },
            ]}
          >
            <Input
              placeholder="인증번호를 입력하세요."
              maxLength={6}
              controls={false}
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 2,
              span: 60,
            }}
          >
            <ButtonOk type="primary" htmlType="submit">
              인증확인
            </ButtonOk>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </CertifyWrap>
  );
};

export default CertifyEmail;
