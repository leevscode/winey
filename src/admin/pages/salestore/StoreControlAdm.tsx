/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React, { useState } from "react";
import StoreControlList from "../../components/salestore/StoreControlList";
import StoreControlPaginate from "../../components/salestore/StoreControlPaginate";
import {
  IEditStore,
  IStoreDetailList,
  IStoreInfo,
} from "../../interface/StoreInterface";
import { regionOptions } from "../member/MemberControlAdm";

const StoreControlAdm = () => {
  const [editZip, setEditZip] = useState<IEditStore | string>(
    "수정된 데이터 모음",
  );

  const [storeInfomation, setStoreInfomation] = useState<IStoreInfo>({
    pageableCustom: {
      page: 1,
      row: 1,
      totalElements: 1,
    },
    content: [] as IStoreDetailList[],
  });
  console.log("storeInfomation", storeInfomation);

  const regionConvert: Array<IStoreDetailList> = storeInfomation.content?.map(
    item => {
      const changeList: {
        regionNmId: number;
        value: string;
      }[] = regionOptions.filter(
        option => item.regionNmId === option.regionNmId,
      );
      if (changeList.length > 0) {
        return { ...item, textRegion: changeList[0].value };
      }
      return item;
    },
  );
  return (
    <div>
      <StoreControlList regionConvert={regionConvert} setEditZip={setEditZip} />
      <StoreControlPaginate
        editZip={editZip}
        storeInfomation={storeInfomation}
        setStoreInfomation={setStoreInfomation}
      />
    </div>
  );
};

export default StoreControlAdm;
