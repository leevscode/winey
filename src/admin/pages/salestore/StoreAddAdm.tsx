import { Button, Form, Input, Modal, Radio, RadioChangeEvent } from "antd";
import React, { useState } from "react";
import { regionOptions } from "../member/MemberControlAdm";
import { StoreAddWrap, StoreAddressModal } from "../../style/AdminStoreStyle";
import { postNewStore } from "../../api/patchAdmStore";
import { IStoreDetailList } from "../../interface/StoreInterface";
import DaumPostcode from "react-daum-postcode";
import { DetailBt } from "../../style/AdminLayoutStyle";
import { useNavigate } from "react-router";

const StoreAddAdm: React.FC = () => {
  const navigate = useNavigate();
  const [newStoreInfo, setNewStoreInfo] = useState<IStoreDetailList>({
    regionNmId: 0,
    nm: "0",
    tel: "0",
    address: "0",
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
  console.log("calendarlocation", calendarlocation);

  const handleAddress = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode(current => !current);
      Modal.confirm({
        okText: "예",
        cancelText: "아니오",
        wrapClassName: "info-modal-wrap notice-modal store-address-modal ",
        maskClosable: true,
        content: (
          <StoreAddressModal>
            <DaumPostcode
              onComplete={handleAddress.selectAddress}
              autoClose={false}
            />
          </StoreAddressModal>
        ),
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("CANCEL");
        },
      });
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      setCalendarLocation(data.address);
      setNewStoreInfo(prevState => ({
        ...prevState,
        address: data.address,
      }));
      setOpenPostcode(false);
    },
  };

  const handleStoreSave = () => {
    postNewStore(newStoreInfo);
  };
  const onCancel = () => {
    navigate(-1);
  };
  console.log("newStoreInfo", newStoreInfo);
  return (
    <StoreAddWrap>
      <div>
        <Button onClick={handleStoreSave}>저장하기</Button>
        <Button onClick={onCancel}>취소하기</Button>
      </div>
      <ul>
        <li>지역선택</li>
        <li>
          <Form.Item>
            <Radio.Group
              onChange={e => handleCity(e)}
              // value={regionOptions.regionNmId}
            >
              {regionOptions.map(item => (
                <Radio key={item.regionNmId} value={item.regionNmId}>
                  {item.value}
                </Radio>
              ))}
            </Radio.Group>{" "}
          </Form.Item>
        </li>
      </ul>
      <ul>
        <li>지점이름</li>
        <li>
          <Form.Item>
            <Input
              placeholder="지점명을 입력하세요."
              onChange={e => handleStoreName(e)}
            />
          </Form.Item>
        </li>
      </ul>
      <ul>
        <li>매장주소</li>
        <li>
          <Form.Item className="storeAddressSt">
            <Input
              placeholder="매장주소를 입력하세요."
              // onChange={e => handleStoreAddress(e)}
              onChange={handleAddress.selectAddress}
              value={calendarlocation}
            />
            <DetailBt onClick={handleAddress.clickButton}>주소검색</DetailBt>
          </Form.Item>
        </li>
      </ul>
      <ul>
        <li>연락처</li>{" "}
        <li>
          <Form.Item>
            <Input
              placeholder="전화번호를 입력하세요."
              onChange={e => handleStoreNumber(e)}
            />
          </Form.Item>
        </li>
      </ul>
    </StoreAddWrap>
  );
};

export default StoreAddAdm;
