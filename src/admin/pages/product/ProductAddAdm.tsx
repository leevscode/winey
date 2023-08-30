import React, { useEffect, useState } from "react";
import {
  AdmProductBtnCancel,
  AdmProductBtnOk,
  ProductAddAdmWrap,
} from "../../style/product/AdminProductStyle";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Radio,
  Upload,
} from "antd";
import { AdminColor } from "../../style/AdminLayoutStyle";

const ProductAddAdm = () => {
  // 안트디자인 기본 코드
  const { RangePicker } = DatePicker;
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  // 상품명 한글 state
  const [productNameKr, setProductNameKr] = useState<string>("");
  console.log("1. 상품명 한글", productNameKr);
  // 상품명 한글 입력창 핸들러
  const handleKr = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    // 한글, 숫자, 공백만 사용하는 정규표현식
    const targetFilter = target.replace(/[^\d가-힣ㄱ-ㅎㅏ-ㅣ\s]/g, "");
    setProductNameKr(targetFilter);
  };
  // 상품명 영문 state
  const [productNameEn, setProductNameEn] = useState<string>("");
  console.log("2. 상품명 영문", productNameEn);
  // 상품명 영문 입력창 핸들러
  const handleEn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    // 영문, 숫자, 공백만 사용하는 정규표현식
    const targetFilter = target.replace(/[^\da-zA-Z\s]/g, "");
    setProductNameEn(targetFilter);
  };
  // 상품 등록 성공
  const onFinish = () => {
    console.log("상품 등록 완료");
  };
  // 상품 등록 실패
  const onFinishFailed = (errorInfo: any) => {
    console.log("상품 등록 실패", errorInfo);
  };
  return (
    <ProductAddAdmWrap>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: AdminColor.headColorC,
          },
        }}
      >
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          {/* 상품 등록 버튼 */}
          <div className="box product-submit-wrap">
            <div className="content">
              <Form.Item>
                <ul>
                  <li>
                    <AdmProductBtnOk type="submit">상품 등록</AdmProductBtnOk>
                  </li>
                  <li>
                    <AdmProductBtnCancel type="submit">
                      취소
                    </AdmProductBtnCancel>
                  </li>
                </ul>
              </Form.Item>
            </div>
          </div>
          {/* 상품명 */}
          <div className="box product-name-wrap">
            <ul>
              <li>
                <div className="title">상품명</div>
                <div className="content">
                  <Form.Item label="한글">
                    <Input
                      placeholder="상품 한글명을 입력해주세요."
                      value={productNameKr}
                      onChange={handleKr}
                    />
                  </Form.Item>
                  <Form.Item label="영문">
                    <Input
                      placeholder="상품 영문명을 입력해주세요."
                      value={productNameEn}
                      onChange={handleEn}
                    />
                  </Form.Item>
                </div>
              </li>
            </ul>
          </div>
          {/* 가격 */}
          <div className="box product-price-wrap">
            <ul>
              <li>
                <div className="title">정상가</div>
                <div className="content">
                  <Form.Item label="정상가">
                    <Input />원
                  </Form.Item>
                </div>
              </li>
              <li>
                <div className="title">할인율</div>
                <div className="content">
                  <Form.Item label="할인율">
                    <Input />%
                  </Form.Item>
                </div>
              </li>
              <li>
                <div className="title">최종판매금액</div>
                <div className="content">
                  <Form.Item label="최종판매금액">
                    <span>12500</span>원
                  </Form.Item>
                </div>
              </li>
            </ul>
          </div>
          {/* 할인기간설정 */}
          <div className="box product-sale-wrap">
            <ul>
              <li>
                <div className="title">할인기간설정</div>
                <div className="content">
                  <Form.Item>
                    <RangePicker picker="month" />
                  </Form.Item>
                </div>
              </li>
            </ul>
          </div>
          {/* 원산지 */}
          <div className="box">
            <ul>
              <li>
                <div className="title">원산지</div>
                <div className="content">
                  <Form.Item>
                    <Radio.Group>
                      <ul>
                        <li>
                          <Radio value="프랑스">프랑스</Radio>
                        </li>
                        <li>
                          <Radio value="이탈리아">이탈리아</Radio>
                        </li>
                        <li>
                          <Radio value="칠레">칠레</Radio>
                        </li>
                        <li>
                          <Radio value="스페인">스페인</Radio>
                        </li>
                        <li>
                          <Radio value="호주">호주</Radio>
                        </li>
                        <li>
                          <Radio value="미국">미국</Radio>
                        </li>
                        <li>
                          <Radio value="기타">기타</Radio>
                        </li>
                      </ul>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </li>
            </ul>
          </div>
          {/* 와인 종류 */}
          <div className="box">
            <ul>
              <li>
                <div className="title">와인 종류</div>
                <div className="content">
                  <Form.Item>
                    <Radio.Group>
                      <ul>
                        <li>
                          <Radio value="레드">레드</Radio>
                        </li>
                        <li>
                          <Radio value="화이트">화이트</Radio>
                        </li>
                        <li>
                          <Radio value="스파클링">스파클링</Radio>
                        </li>
                        <li>
                          <Radio value="기타">기타</Radio>
                        </li>
                      </ul>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </li>
            </ul>
          </div>
          {/* 당도 */}
          <div className="box">
            <ul>
              <li>
                <div className="title">당도</div>
                <div className="content">
                  <Form.Item>
                    <Radio.Group>
                      <ul>
                        <li>
                          <Radio value="1">1</Radio>
                        </li>
                        <li>
                          <Radio value="2">2</Radio>
                        </li>
                        <li>
                          <Radio value="3">3</Radio>
                        </li>
                        <li>
                          <Radio value="4">4</Radio>
                        </li>
                        <li>
                          <Radio value="5">5</Radio>
                        </li>
                      </ul>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </li>
            </ul>
          </div>
          {/* 산도 */}
          <div className="box">
            <ul>
              <li>
                <div className="title">산도</div>
                <div className="content">
                  <Form.Item>
                    <Radio.Group>
                      <ul>
                        <li>
                          <Radio value="1">1</Radio>
                        </li>
                        <li>
                          <Radio value="2">2</Radio>
                        </li>
                        <li>
                          <Radio value="3">3</Radio>
                        </li>
                        <li>
                          <Radio value="4">4</Radio>
                        </li>
                        <li>
                          <Radio value="5">5</Radio>
                        </li>
                      </ul>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </li>
            </ul>
          </div>
          {/* 바디 */}
          <div className="box">
            <ul>
              <li>
                <div className="title">바디</div>
                <div className="content">
                  <Form.Item>
                    <Radio.Group>
                      <ul>
                        <li>
                          <Radio value="1">1</Radio>
                        </li>
                        <li>
                          <Radio value="2">2</Radio>
                        </li>
                        <li>
                          <Radio value="3">3</Radio>
                        </li>
                        <li>
                          <Radio value="4">4</Radio>
                        </li>
                        <li>
                          <Radio value="5">5</Radio>
                        </li>
                      </ul>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </li>
            </ul>
          </div>
          {/* 향(아로마) */}
          <div className="box">
            <ul>
              <li>
                <div className="title">향(아로마)</div>
                <div className="content">
                  <Form.Item>
                    <Checkbox.Group>
                      <ul>
                        <li>
                          <Checkbox value={1}>꽃</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={2}>과일</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={3}>식물</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={4}>향신료</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={5}>흙냄새</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={6}>탄향</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={7}>견과류</Checkbox>
                        </li>
                      </ul>
                    </Checkbox.Group>
                  </Form.Item>
                </div>
              </li>
            </ul>
          </div>
          {/* 페어링음식 */}
          <div className="box">
            <ul>
              <li>
                <div className="title">페어링음식</div>
                <div className="content">
                  <Form.Item>
                    <Checkbox.Group>
                      <ul>
                        <li>
                          <Checkbox value={1}>스테이크</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={2}>삼겹살</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={3}>치킨</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={4}>생선</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={5}>해산물</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={6}>샐러드</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={7}>튀김</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={8}>치즈</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={9}>과일</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={10}>한식</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={11}>양식</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={12}>디저트</Checkbox>
                        </li>
                      </ul>
                    </Checkbox.Group>
                  </Form.Item>
                </div>
              </li>
            </ul>
          </div>
          {/* 추천유무 */}
          <div className="box">
            <ul>
              <li>
                <div className="title">추천 유무</div>
                <div className="content">
                  <Form.Item>
                    <Checkbox.Group>
                      <ul>
                        <li>
                          <Checkbox value={"추천상품"}>추천상품</Checkbox>
                        </li>
                        <li>
                          <Checkbox value={"입문자 추천"}>입문자 추천</Checkbox>
                        </li>
                      </ul>
                    </Checkbox.Group>
                  </Form.Item>
                </div>
              </li>
            </ul>
          </div>
          {/* 재고수량 */}
          <div className="box product-quantity-wrap">
            <ul>
              <li>
                <div className="title">재고수량</div>
                <div className="content">
                  <Form.Item>
                    <Input />개
                  </Form.Item>
                </div>
              </li>
            </ul>
          </div>
          {/* 상품이미지업로드 */}
          <div className="box">
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
        </Form>
      </ConfigProvider>
    </ProductAddAdmWrap>
  );
};

export default ProductAddAdm;
