/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import {
  ConfigProvider,
  Form,
  Input,
  Modal,
  Radio,
  RadioChangeEvent,
} from "antd";
import React, { useEffect, useState } from "react";
import { regionOptions } from "../member/MemberControlAdm";
import { StoreAddWrap, StoreAddressModal } from "../../style/AdminStoreStyle";
import { postNewStore } from "../../api/patchAdmStore";
import { IStoreDetailList } from "../../interface/StoreInterface";
import DaumPostcode from "react-daum-postcode";
import { AdminColor, DetailBt } from "../../style/AdminLayoutStyle";
import { useNavigate } from "react-router";
import {
  AdmProductBtnCancel,
  AdmProductBtnOk,
} from "../../style/product/AdminProductStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const StoreAddAdm: React.FC = () => {
  const navigate = useNavigate();
  const [addressErr, setAddressErr] = useState<string>("");
  const [newStoreInfo, setNewStoreInfo] = useState<IStoreDetailList>({
    regionNmId: 0,
    nm: "0",
    tel: "0",
    address: "0",
    addressSub: "",
  });

  // 매장 도시
  const handleCity = (e: RadioChangeEvent) => {
    setNewStoreInfo(prevState => ({
      ...prevState,
      regionNmId: e.target.value,
    }));
  };

  // 매장 이름
  const handleStoreName: React.ChangeEventHandler<HTMLInputElement> = e => {
    setNewStoreInfo(prevState => ({
      ...prevState,
      nm: e.target.value,
    }));
  };
  // 매장 연락처
  const handleStoreNumber: React.ChangeEventHandler<HTMLInputElement> = e => {
    setNewStoreInfo(prevState => ({
      ...prevState,
      tel: e.target.value,
    }));
  };

  // 매장주소 api
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const [calendarlocation, setCalendarLocation] = useState<string>("");
  // 세부주소
  const [subAddress, setSubAddress] = useState<string>("");

  const handleAddress = {
    // 버튼 클릭 이벤트
    clickButton: (e: any) => {
      e.preventDefault();
      setOpenPostcode(current => !current);
      Modal.confirm({
        // okText: "예",
        // cancelText: "아니오",
        wrapClassName: "info-modal-wrap notice-modal store-address-modal ",
        maskClosable: true,
        footer: null,
        content: (
          <StoreAddressModal>
            <DaumPostcode
              onComplete={handleAddress.selectAddress}
              autoClose={true}
            />
          </StoreAddressModal>
        ),
        // onOk() {
        //   console.log("OK");
        // },
        // onCancel() {
        //   console.log("CANCEL");
        // },
      });
    },

    // 주소 선택 이벤트
    selectAddress: async (data: any) => {
      // console.log("data", data);
      // const temp = await setCalendarLocation(data.address);
      await setCalendarLocation(data.address);
      setNewStoreInfo(prevState => ({
        ...prevState,
        address: data.address,
      }));
      setOpenPostcode(false);
      setAddressErr("");
      Modal.destroyAll(); // 모든 모달 닫기
    },
  };
  // 상세주소
  const handleAddressSub: React.ChangeEventHandler<HTMLInputElement> = e => {
    // console.log("eee", e.target.value);
    setSubAddress(e.target.value);
    setNewStoreInfo(prevState => ({
      ...prevState,
      addressSub: subAddress,
    }));
  };

  const onAddCancel = () => {
    navigate("/admin/storecontrol");
  };
  const onFinish = () => {
    // console.log("newStoreInfo.address", newStoreInfo.address);
    if (newStoreInfo.address === "0") {
      setAddressErr("주소를 입력해 주세요.");
      return;
    }
    try {
      Modal.confirm({
        okText: "예",
        cancelText: "아니오",
        wrapClassName: "info-modal-wrap notice-modal",
        maskClosable: true,
        content: (
          <ul>
            <li>매장 등록을 진행하시겠습니까?</li>
          </ul>
        ),
        async onOk() {
          const complete: any | undefined = await postNewStore(newStoreInfo);
          // console.log("complete", complete);
          if (complete !== 0) {
            navigate("/admin/storecontrol");
            // console.log("매장등록성공");
          } else {
            Modal.error({
              icon: (
                <i className="color_r">
                  <FontAwesomeIcon icon={faTriangleExclamation} />
                </i>
              ),
              okText: "확인",
              wrapClassName: "info-modal-wrap error-modal",
              maskClosable: true,
              title: "매장등록 실패",
              content: <p>매장등록에 실패했습니다. 다시 한번 시도해주세요</p>,
            });
          }
        },
        onCancel() {
          // console.log("매장등록취소");
        },
      });
    } catch (error) {
      // 오류 처리 로직 추가
    }
  };
  const onFinishFailed = () => {
    // console.log("전송실패");
  };
  useEffect(() => {
    // console.log("화면랜더링");
  }, [calendarlocation]);

  return (
    <StoreAddWrap>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: AdminColor.yellowC,
          },
        }}
      >
        <Form
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          layout="horizontal"
        >
          <div className="addButton">
            <AdmProductBtnOk
            // onClick={handleStoreSave}
            >
              매장 등록
            </AdmProductBtnOk>
            <AdmProductBtnCancel
              onClick={() => navigate("/admin/storecontrol")}
            >
              취소
            </AdmProductBtnCancel>
          </div>
          <div className="storeAddForm">
            <ul className="store-select">
              <li className="title">지역선택</li>
              <li className="content">
                <Form.Item
                  name="regionSelect"
                  rules={[
                    {
                      required: true,
                      message: "지역을 선택해 주세요",
                    },
                  ]}
                >
                  <Radio.Group onChange={e => handleCity(e)} size="large">
                    {regionOptions.map(item => (
                      <Radio key={item.regionNmId} value={item.regionNmId}>
                        {item.value}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Form.Item>
              </li>
            </ul>
            <ul className="store-name">
              <li className="title">매장 이름</li>
              <li className="content">
                <Form.Item
                  name="storeNm"
                  rules={[
                    {
                      required: true,
                      message: "매장 이름을 입력해 주세요",
                    },
                  ]}
                >
                  <Input
                    placeholder="매장 이름을 입력하세요."
                    onChange={data => handleStoreName(data)}
                  />
                </Form.Item>
              </li>
            </ul>
            <ul className="store-address">
              <li className="title">매장 주소</li>
              <li className="content">
                <Form.Item className="storeAddressSt" name="storeAddress">
                  <Input
                    value={calendarlocation}
                    placeholder="매장 주소를 입력하세요."
                    // readOnly
                    readOnly={true}
                    // onClick={handleAddress.clickButton}
                  />
                  <Input
                    className="storeAddressSub"
                    value={subAddress}
                    placeholder="상세주소"
                    onChange={handleAddressSub}
                  />
                  <DetailBt onClick={handleAddress.clickButton}>
                    주소검색
                  </DetailBt>
                </Form.Item>
                {addressErr ? <p>{addressErr}</p> : <p></p>}
              </li>
            </ul>
            <ul className="store-tel">
              <li className="title">연락처</li>
              <li className="content">
                <Form.Item
                  name="storeNumber"
                  rules={[
                    {
                      pattern: /^(\d{2,3})?-?(\d{3,4})?-?(\d{4})$/,
                      message: "형식에 맞춰 입력해 주세요. (ex. 000-000-0000)",
                    },
                    {
                      required: true,
                      message: "매장 연락처를 입력해 주세요.",
                    },
                  ]}
                >
                  <Input
                    // 글자수 제한
                    maxLength={13}
                    placeholder="매장 연락처를 형식에 맞춰 입력해 주세요. (ex. 000-000-0000)"
                    onChange={e => handleStoreNumber(e)}
                  />
                </Form.Item>
              </li>
            </ul>
          </div>
        </Form>
      </ConfigProvider>
    </StoreAddWrap>
  );
};

export default StoreAddAdm;
