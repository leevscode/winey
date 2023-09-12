/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React, { useEffect, useState } from "react";
import StoreControlList from "../../components/salestore/StoreControlList";
import StoreControlPaginate from "../../components/salestore/StoreControlPaginate";
import {
  IEditStore,
  IStoreDetailList,
  IStoreInfo,
} from "../../interface/StoreInterface";
import { regionOptions } from "../member/MemberControlAdm";
import StoreControlSort, {
  initialSortOption,
} from "../../components/salestore/StoreControlSort";
import { IMemberSortOption, IinitialPg } from "../../interface/MemberInterface";
import { RecoilState, selector, useRecoilValue } from "recoil";

const StoreControlAdm = () => {
  // 정렬 state
  const [sortOption, setSortOption] =
    useState<IMemberSortOption>(initialSortOption);
  const [paginate, setPaginate] = useState<IinitialPg>({ page: 1, row: 10 });

  // 검색 state
  const [textSearch, setTextSearch] = useState<string>("");
  const [sortSearch, setSortSearch] = useState<string>("");
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
  // console.log("storeInfomation", storeInfomation);

  const regionConvert: Array<IStoreDetailList> = storeInfomation?.content?.map(
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
      <StoreControlSort
        storeInfomation={storeInfomation}
        setSortOption={setSortOption}
        textSearch={textSearch}
        setTextSearch={setTextSearch}
        sortSearch={sortSearch}
        setSortSearch={setSortSearch}
        paginate={paginate}
        setPaginate={setPaginate}
      />
      <StoreControlList
        regionConvert={regionConvert}
        setEditZip={setEditZip}
        editZip={editZip}
      />
      <StoreControlPaginate
        editZip={editZip}
        setEditZip={setEditZip}
        storeInfomation={storeInfomation}
        setStoreInfomation={setStoreInfomation}
        sortOption={sortOption}
        sortSearch={sortSearch}
        textSearch={textSearch}
        paginate={paginate}
        setPaginate={setPaginate}
      />
    </div>
  );
};

export default StoreControlAdm;
