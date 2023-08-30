/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Button, Form, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ProductAddImage = () => {
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <div>
      <ul>
        <li>
          <div className="title">상품이미지업로드</div>
          <div className="content">
            <Form.Item getValueFromEvent={normFile}>
              <Upload>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductAddImage;
