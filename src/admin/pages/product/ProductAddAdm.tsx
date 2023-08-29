import React, { useState } from "react";
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
  return (
    <ProductAddAdmWrap>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: AdminColor.headColorC,
          },
        }}
      >
        <Form>
          {/* 상품 등록 버튼 */}
          <div className="box product-submit-wrap">
            <div className="content">
              <Form.Item>
                <ul>
                  <li>
                    <AdmProductBtnOk>상품 등록</AdmProductBtnOk>
                  </li>
                  <li>
                    <AdmProductBtnCancel>취소</AdmProductBtnCancel>
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
                    <Input />
                  </Form.Item>
                  <Form.Item label="영문">
                    <Input />
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
