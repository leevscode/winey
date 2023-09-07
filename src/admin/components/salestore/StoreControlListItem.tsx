/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React, { useState } from "react";
import { deleteStore } from "../../api/patchAdmStore";
import {
  DetailBt,
  MemberOutBt,
} from "../../style/AdminLayoutStyle";
import { Input } from "antd";

const StoreControlListItem = ({ item }: any) => {

  // 수정관련 state
  const [edit, setEdit] = useState<boolean>(false);
  const [editStoreNm, setEditStoreNm] = useState<string>(item.nm);
  const [editStoreAddress, setEditStoreAddress] = useState<string>(
    item.address,
  );
  const [editStoreTel, setEditStoreTel] = useState<string>(item.tel);

  // 매장정보 수정버튼
  const handleStoreEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
    setEdit(!edit);
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
  // 수정 (매장연락처)
  const handleTelEditChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setEditStoreTel(e.target.value);
  };

  // 매장삭제
  const handleStoreDel: React.MouseEventHandler<HTMLButtonElement> = e => {
    deleteStore(e.currentTarget.value);
  };

  // 수정 저장하기
  const handleEditSave = () => {
    setEdit(!edit);
    console.log("save");
  };
  // 수정 취소하기
  const handleEditCancel = () => {
    setEdit(!edit);
    console.log("cancel");
  };
  if (edit) {
    // 수정중
    return (
      <>
        <li>{item.storeId}</li>
        <li>{item.textRegion}</li>
        <li>
          <Input value={editStoreNm} onChange={e => handleNmEditChange(e)} />
        </li>
        <li>
          <Input
            value={editStoreAddress}
            onChange={e => handleAddressEditChange(e)}
          />
        </li>
        <li>
          <Input value={editStoreTel} onChange={e => handleTelEditChange(e)} />
        </li>
        <li>
          <DetailBt onClick={handleEditSave}>저장</DetailBt>
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
          <DetailBt
            onClick={handleStoreEdit}
          >
            수정
          </DetailBt>
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
