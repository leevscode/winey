/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

export interface IStoreInfo {
  page: {
    page: number;
    row: number;
    startIdx: number;
    totalRecordCount: number;
    totalPage: number;
    pageSize: number;
    prev: boolean;
    next: boolean;
    startPage: number;
    endPage: number;
  };
  list: IStoreDetailList[];
}
export interface IStoreDetailList {
  regionNmId: number;
  nm: string;
  tel: string;
  address: string;
  storeId?: number;
  textRegion?: string;
}
export interface IStoreInfoState {
  storeInfomation: IStoreInfo;
  setStoreInfomation: React.Dispatch<React.SetStateAction<IStoreInfo>>;
}
export interface INewStoreState {
  newStoreInfo: IStoreDetailList;
  setNewStoreInfo: React.Dispatch<React.SetStateAction<IStoreDetailList>>;
}
export interface IStoreAddressState {
  calendarlocation: string;
  setCalendarLocation: React.Dispatch<React.SetStateAction<string>>;
}
