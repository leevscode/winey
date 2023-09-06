import React from "react";
import { IStoreDetailList, IStoreInfo } from "../../interface/StoreInterface";
import {
  DetailBt,
  MemberOutBt,
  TableLayoutContents,
  TableLayoutTitle,
  TableVertical,
  TableWrap,
} from "../../style/AdminLayoutStyle";
import { MemberDetailWrap } from "../../style/AdminMemberStyle";
import { useOutletContext } from "react-router";
import { deleteStore } from "../../api/patchAdmStore";

const StoreControlList = ({
  regionConvert,
}: {
  regionConvert: IStoreDetailList[];
}) => {
  const { listPathName } = useOutletContext() as { listPathName: string };
  const gridTemplateColumns = {
    columns: "0.4fr 0.5fr 0.7fr 1.2fr 0.6fr 0.5fr 0.5fr",
  };
  console.log("regionConvert", regionConvert);

  // 매장정보 수정
  const handleStoreEdit = () => {
    console.log("");
  };

  // 매장삭제
  const handleStoreDel: React.MouseEventHandler<HTMLButtonElement> = e => {
    deleteStore(e.currentTarget.value);
  };
  return (
    <MemberDetailWrap>
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
              </TableLayoutContents>
            ))
          ) : (
            <p className="noItem"> 등록된 매장이 없습니다</p>
          )}
        </TableVertical>
      </TableWrap>
    </MemberDetailWrap>
  );
};

export default StoreControlList;
