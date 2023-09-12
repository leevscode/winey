/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React, { useEffect, useState } from "react";
import {
  deleteStore,
  getStoreList,
  putEditStore,
} from "../../api/patchAdmStore";
import {
  AdminColor,
  DetailBt,
  MemberOutBt,
} from "../../style/AdminLayoutStyle";
import { ConfigProvider, Form, Input, Modal, Popover, Radio } from "antd";
import { regionOptions } from "../../pages/member/MemberControlAdm";
import { StoreAddressModal } from "../../style/AdminStoreStyle";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useNavigate } from "react-router-dom";

const StoreControlListItem = ({ item, setEditZip, editZip }: any) => {
  const navigate = useNavigate();
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

  // 예외처리
  const [error, setError] = useState("");

  // 지역선택모달 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 모달창 오픈
  const handleEditCityModal = () => {
    setIsModalOpen(true);
  };
  // 변경지역선택 후 ok
  const handleCity = (e: any) => {
    const CityNum = e.target.value;
    // console.log("CityNum", CityNum);
    setEditZip(CityNum);
    setEditStoreCity(CityNum);
    const convert = regionOptions.map(item => {
      if (CityNum === item.regionNmId) {
        return setEditStoreCityKor(item.value);
      }
      return;
    });
    setIsModalOpen(false);
  };
  // console.log("editStoreCityKor", editStoreCityKor);
  // console.log("editStoreCity", editStoreCity);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //수정 (매장명)
  const handleNmEditChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setEditStoreNm(e.target.value);
    setEditZip(e.target.value);
  };
  //수정 (매장주소)
  const handleAddressEditChange: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    setEditStoreAddress(e.target.value);
    setEditZip(e.target.value);
  };
  // 매장주소 api
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const [calendarlocation, setCalendarLocation] = useState<string>("");
  // console.log("calendarlocation", calendarlocation);

  const handleAddress = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode(current => !current);
      Modal.confirm({
        // okText: "예",
        // cancelText: "아니오",
        wrapClassName: "info-modal-wrap notice-modal store-address-modal ",
        maskClosable: true,
        footer: null,
        content: (
          <StoreAddressModal>
            <DaumPostcodeEmbed
              onComplete={handleAddress.selectAddress}
              autoClose={false}
            />
          </StoreAddressModal>
        ),
      });
    },
    // 주소 선택 이벤트
    selectAddress: async (data: any) => {
      // console.log("data", data);
      const temp = await setCalendarLocation(data.address);
      setEditStoreAddress(data.address);
      setOpenPostcode(false);
      Modal.destroyAll(); // 모든 모달 닫기
    },
  };

  // 수정 (매장연락처)
  const handleTelEditChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setEditStoreTel(e.target.value);
  };

  // 매장정보 수정창으로 전환
  const handleStoreEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
    setEdit(!edit);
  };

  // 수정 최종 저장하기
  const handleEditSave: React.MouseEventHandler<
    HTMLButtonElement
  > = async e => {
    const numberReg: any = /^\d{2,3}-\d{3,4}-\d{4}$/;

    if (editStoreNm === undefined || editStoreNm === "") {
      setError("지점이름을 입력해 주세요.");
      return;
    }
    if (editStoreAddress === undefined || editStoreAddress === "") {
      setError("지점주소를 선택해 주세요.");
      return;
    }
    if (editStoreTel === "") {
      setError("지점 연락처를 입력하세요.");
      return;
    }
    if (!numberReg.test(editStoreTel)) {
      setError("올바른 형식으로 입력하세요 (ex.000-000-0000)");
      return;
    }
    if (e != null) {
      setError("");
    }
    Modal.confirm({
      okText: "예",
      cancelText: "아니오",
      wrapClassName: "info-modal-wrap notice-modal store-control-modal",
      maskClosable: true,
      content: (
        <ul>
          <li>매장정보를 수정하시겠습니까?</li>
        </ul>
      ),
      async onOk() {
        try {
          const storeId = item.storeId;
          setError("");
          await putEditStore({
            storeId,
            editStoreCity,
            editStoreNm,
            editStoreAddress,
            editStoreTel,
          });
          setEditZip({
            editStoreCity,
            editStoreNm,
            editStoreAddress,
            editStoreTel,
          });
          setEdit(!edit);
          return;
        } catch (error) {
          setError("네트워크 오류 입니다");
          // console.log(error);
          return;
        }
      },
      onCancel() {
        // console.log("CANCEL");
      },
    });
  };
  // 수정 취소하기
  const handleEditCancel = () => {
    setEdit(!edit);
    // console.log("cancel");
  };

  // 매장삭제
  const handleStoreDel = (item: any) => {
    Modal.confirm({
      okText: "예",
      cancelText: "아니오",
      wrapClassName: "info-modal-wrap notice-modal store-control-modal ",
      maskClosable: true,
      content: (
        <ul>
          <li>
            매장정보를 삭제하시겠습니까?
            <br />
            삭제된 정보는 복원이 불가능합니다.
          </li>
        </ul>
      ),
      async onOk() {
        try {
          // console.log("item.storeId", item.storeId);
          await deleteStore(item.storeId);
          setEditZip(item.storeId);
          // console.log("OK");
          return;
        } catch (error) {
          // console.log("CANCEL");
          return;
        }
      },
      onCancel() {
        // console.log("CANCEL");
      },
    });
  };
  const content = <div>{error}</div>;

  useEffect(() => {
    // console.log("화면갱신", editZip);
  }, [editZip]);
  if (edit) {
    // 수정중
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: AdminColor.yellowC,
          },
        }}
      >
        <li>{item.storeId}</li>
        <li className="cityEditSty">
          <Form.Item
            name="editStoreCity"
            rules={[
              {
                required: true,
                message: "지역을 선택해 주세요",
              },
            ]}
          >
            <span>{editStoreCityKor}</span>
            <DetailBt onClick={handleEditCityModal}>변경</DetailBt>
          </Form.Item>
        </li>
        <Modal
          className="store-control-modal"
          closeIcon={false}
          title="지역 변경"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={false}
        >
          <Radio.Group onChange={e => handleCity(e)}>
            {regionOptions?.map(item => (
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
          <Input
            maxLength={13}
            value={editStoreTel}
            onChange={e => handleTelEditChange(e)}
          />
        </li>
        <li>
          {error !== "" ? (
            <Popover content={content} trigger="click">
              <DetailBt value={item.storeId} onClick={e => handleEditSave(e)}>
                저장
              </DetailBt>
            </Popover>
          ) : (
            <DetailBt value={item.storeId} onClick={e => handleEditSave(e)}>
              저장
            </DetailBt>
          )}
        </li>
        <li>
          <MemberOutBt onClick={handleEditCancel}>취소</MemberOutBt>
        </li>
      </ConfigProvider>
    );
  } else {
    return (
      <>
        <li>{item.storeId}</li>
        <li>{item.textRegion}</li>
        <li>{item.nm}</li>
        <li className="tal">{item.address}</li>
        <li>{item.tel}</li>
        <li>
          <DetailBt onClick={handleStoreEdit}>수정</DetailBt>
        </li>
        <li>
          <MemberOutBt
            // value={item.storeId}
            onClick={() => handleStoreDel(item)}
          >
            삭제
          </MemberOutBt>
        </li>
      </>
    );
  }
};

export default StoreControlListItem;
