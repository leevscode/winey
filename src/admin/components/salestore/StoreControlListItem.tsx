/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React, { useEffect, useState } from "react";
import { deleteStore, putEditStore } from "../../api/patchAdmStore";
import { DetailBt, MemberOutBt } from "../../style/AdminLayoutStyle";
import { Form, Input, Modal, Radio } from "antd";
import { regionOptions } from "../../pages/member/MemberControlAdm";
import { StoreAddressModal } from "../../style/AdminStoreStyle";
import DaumPostcodeEmbed from "react-daum-postcode";

const StoreControlListItem = ({ item }: any) => {
  // 수정관련 state
  const [edit, setEdit] = useState<boolean>(false);
  const [editStoreCity, setEditStoreCity] = useState<number>(item.regionNmId);
  const [editStoreCityKor, setEditStoreCityKor] = useState<string>(
    item.textRegion,
  );
  const [editStoreNm, setEditStoreNm] = useState<string>(item.nm);
  const [editStoreAddress, setEditStoreAddress] = useState<string>(
    item.address,
  );
  const [editStoreTel, setEditStoreTel] = useState<string>(item.tel);

  // 지역선택모달 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 모달창 오픈
  const handleEditCityModal = () => {
    setIsModalOpen(true);
  };
  // 변경지역선택 후 ok
  const handleCity = (e: any) => {
    const CityNum = e.target.value;
    console.log("CityNum", CityNum);
    setEditStoreCity(CityNum);
    const convert = regionOptions.map(item => {
      if (CityNum === item.regionNmId) {
        return setEditStoreCityKor(item.value);
      }
      return;
    });
    setIsModalOpen(false);
  };
  console.log("editStoreCityKor", editStoreCityKor);
  console.log("editStoreCity", editStoreCity);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //수정 (매장명)
  const handleNmEditChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setEditStoreNm(e.target.value);
  };
  //수정 (매장주소)
  const handleAddressEditChange: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    setEditStoreAddress(e.target.value);
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
            <DaumPostcodeEmbed
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
    selectAddress: async (data: any) => {
      console.log("data", data);
      const temp = await setCalendarLocation(data.address);
      setEditStoreAddress(data.address);
      setOpenPostcode(false);
    },
  };

  // 수정 (매장연락처)
  const handleTelEditChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setEditStoreTel(e.target.value);
  };

  // 매장삭제
  const handleStoreDel: React.MouseEventHandler<HTMLButtonElement> = e => {
    deleteStore(e.currentTarget.value);
  };

  // 매장정보 수정창으로 전환
  const handleStoreEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
    setEdit(!edit);
  };

  // 수정 최종 저장하기
  const handleEditSave: React.MouseEventHandler<
    HTMLButtonElement
  > = async e => {
    const storeId: string = e.currentTarget.value;
    const putInfo = await putEditStore({
      storeId,
      editStoreCity,
      editStoreNm,
      editStoreAddress,
      editStoreTel,
    });
    setEdit(!edit);
    return;
  };
  // 수정 취소하기
  const handleEditCancel = () => {
    setEdit(!edit);
    console.log("cancel");
  };

  // 화면갱신
  useEffect(() => {
    console.log("화면갱신");
  }, [editStoreCityKor, editStoreNm, editStoreAddress, editStoreTel]);

  if (edit) {
    // 수정중
    return (
      <>
        <li>{item.storeId}</li>
        <li>
          <Form.Item
            name="regionSelect"
            rules={[
              {
                required: true,
                message: "지역을 선택해 주세요",
              },
            ]}
          >
            {editStoreCityKor}
            <DetailBt onClick={handleEditCityModal}>변경</DetailBt>
          </Form.Item>
        </li>
        <Modal title="지역선택 변경" open={isModalOpen} onCancel={handleCancel}>
          <Radio.Group onChange={e => handleCity(e)}>
            {regionOptions.map(item => (
              <Radio key={item.regionNmId} value={item.regionNmId}>
                {item.value}
              </Radio>
            ))}
          </Radio.Group>
        </Modal>
        <li>
          <Input value={editStoreNm} onChange={e => handleNmEditChange(e)} />
        </li>
        <li>
          <Input
            value={editStoreAddress}
            onClick={handleAddress.clickButton}
            onChange={e => handleAddressEditChange(e)}
          />
        </li>
        <li>
          <Input value={editStoreTel} onChange={e => handleTelEditChange(e)} />
        </li>
        <li>
          <DetailBt value={item.storeId} onClick={e => handleEditSave(e)}>
            저장
          </DetailBt>
        </li>
        <li>
          <MemberOutBt onClick={handleEditCancel}>취소</MemberOutBt>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li>{item.storeId}</li>
        <li>{item.textRegion}</li>
        <li>{item.nm}</li>
        <li>{item.address}</li>
        <li>{item.tel}</li>
        <li>
          <DetailBt onClick={handleStoreEdit}>수정</DetailBt>
        </li>
        <li>
          <MemberOutBt value={item.storeId} onClick={handleStoreDel}>
            삭제
          </MemberOutBt>
        </li>
      </>
    );
  }
};

export default StoreControlListItem;
