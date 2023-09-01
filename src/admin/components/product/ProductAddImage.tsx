/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Button, Form, Upload, UploadFile } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam, UploadProps } from "antd/es/upload";
import { ProductImageWrap } from "../../style/product/AdminProductStyle";

export interface IProductImage {
  selectImage: UploadFile<any>[];
  setSelectImage: React.Dispatch<React.SetStateAction<UploadFile<any>[]>>;
}
const ProductAddImage = ({ selectImage, setSelectImage }: IProductImage) => {
  // 상품 이미지 업로드 핸들러
  const handleImageChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setSelectImage(newFileList);
  };
  console.log("이미지 업로드 했습니다.", selectImage);
  return (
    <ProductImageWrap>
      <ul>
        <li>
          <div className="title">상품이미지업로드</div>
          <div className="content">
            <Form.Item>
              <Upload
                onChange={handleImageChange}
                fileList={selectImage}
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductImageWrap>
  );
};

export default React.memo(ProductAddImage);
