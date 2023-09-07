/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React, { useState } from "react";
import { IStoreDetailList } from "../../interface/StoreInterface";
import {
  TableLayoutContents,
  TableLayoutTitle,
  TableVertical,
  TableWrap,
} from "../../style/AdminLayoutStyle";
import { useOutletContext } from "react-router";
import StoreControlListItem from "./StoreControlListItem";
import { EditStoreWrap } from "../../style/AdminStoreStyle";

const StoreControlList = ({
  regionConvert,
}: {
  regionConvert: IStoreDetailList[];
}) => {
  const { listPathName } = useOutletContext() as { listPathName: string };
  const gridTemplateColumns = {
    columns: "0.4fr 0.6fr 0.6fr 1.2fr 0.5fr 0.4fr 0.4fr",
  };
  console.log("regionConvert", regionConvert);

  return (
    <EditStoreWrap>
      <TableWrap>
        <TableVertical>
          <TableLayoutTitle
            listPathName={listPathName}
            style={{
              gridTemplateColumns: gridTemplateColumns.columns,
            }}
          >
            <li>매장번호</li>
            <li>지역</li>
            <li>매장이름</li>
            <li>매장주소</li>
            <li>연락처</li>
            <li></li>
            <li></li>
          </TableLayoutTitle>
            {regionConvert.length !== 0 ? (
              regionConvert.map(item => (
                <TableLayoutContents
                  listPathName={listPathName}
                  key={item.storeId}
                  style={{
                    gridTemplateColumns: gridTemplateColumns.columns,
                  }}
                >
                    <StoreControlListItem key={item.storeId} item={item} />
                </TableLayoutContents>
              ))
            ) : (
              <p className="noItem"> 등록된 매장이 없습니다</p>
            )}
        </TableVertical>
      </TableWrap>
    </EditStoreWrap>
  );
};

export default StoreControlList;
