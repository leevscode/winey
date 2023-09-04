/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { Button, ConfigProvider, Form, Input } from "antd";
import React from "react";
import { CertifyWrap } from "../../style/JoinStyle";
import { ButtonOk } from "../../style/GlobalStyle";

const CertifyEmail = ({ setEmailCertifyOk }) => {
  const onFinish = values => {
    // 응답값 받아서 확인하기
    setEmailCertifyOk(true);
  };
  const onFinishFailed = errorInfo => {
    // 인증실패
    console.log("Failed:", errorInfo);
  };

  return (
    <CertifyWrap>
      <p> 입력하신 메일로 인증코드가 발송 되었습니다.</p>
      <p> 이메일로 전송한 코드를 정확하게 입력해 주세요.</p>
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
