/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect } from "react";
import { Button, Form, Upload, UploadFile } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam, UploadProps } from "antd/es/upload";
import { ProductImageWrap } from "../../style/product/AdminProductStyle";
import { Iproduct } from "../../interface/ProductInterface";

export interface IProductImage {
  selectImage: UploadFile<any>[];
  setSelectImage: React.Dispatch<React.SetStateAction<UploadFile<any>[]>>;
  postProductData: Iproduct;
}
const ProductAddImage = ({
  selectImage,
  setSelectImage,
  postProductData,
}: IProductImage) => {
  // 상품 이미지 업로드 핸들러
  const handleImageChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setSelectImage(newFileList);
  };
  // 업로드된 이미지 삭제 버튼 클릭했을 경우 실행
  const handleRemoveImg = () => {
    setSelectImage([]);
  };
  // console.log("이미지 업로드 했습니다.", selectImage);
  // pic의 값이 null일 경우 업로드한 이미지 태그 안보이게 처리
  useEffect(() => {
    if (postProductData.pic === null) {
      setSelectImage([]);
    }
  }, [postProductData]);
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
                onRemove={handleRemoveImg}
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
