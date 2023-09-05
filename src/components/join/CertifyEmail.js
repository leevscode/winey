/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { Button, ConfigProvider, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { CertifyWrap } from "../../style/JoinStyle";
import { ButtonOk } from "../../style/GlobalStyle";
import { postConfirmCode } from "../../api/joinpatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const CertifyEmail = ({ setEmailCertifyOk }) => {
  const [inputCode, setInputCode] = useState("");

  // 인증번호 저장
  const handleCodeValue = e => {
    setInputCode(e.target.value);
  };
  const onFinish = values => {
    postConfirmCode(inputCode);
    // console.log("result", result);
    // if (result === 1) {
    //   Modal.success({
    //     icon: (
    //       <i>
    //         <FontAwesomeIcon icon={faCircleCheck} />
    //       </i>
    //     ),
    //     okText: "확인",
    //     wrapClassName: "info-modal-wrap",
    //     maskClosable: true,
    //     content: (
    //       <ul>
    //         <li>이메일 인증이 완료되었습니다.</li>
    //       </ul>
    //     ),
    //     onOk() {
    //       // 응답값 받아서 확인하기
    //       setEmailCertifyOk(true);
    //       return;
    //     },
    //   });
    // }
    // if (result === 0) {
    //   Modal.error({
    //     icon: (
    //       <i className="color_r">
    //         <FontAwesomeIcon icon={faTriangleExclamation} />
    //       </i>
    //     ),
    //     okText: "확인",
    //     wrapClassName: "info-modal-wrap",
    //     maskClosable: true,
    //     content: (
    //       <ul>
    //         <li>이메일 인증 실패.</li>
    //       </ul>
    //     ),
    //     onOk() {
    //       // 응답값 받아서 확인하기
    //       setEmailCertifyOk(true);
    //       return;
    //     },
    //   });
    // }
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
              onChange={e => handleCodeValue(e)}
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
