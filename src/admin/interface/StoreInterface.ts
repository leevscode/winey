/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import { IMemberSortOption, IinitialPg } from "./MemberInterface";

export interface IStoreInfo {
  pageableCustom: {
    page: number;
    row: number;
    totalElements: number;
  };
  content: IStoreDetailList[];
}
export interface IStoreDetailList {
  regionNmId: number;
  nm: string;
  tel: string;
  address: string;
  addressSub?: string | undefined;
  storeId?: string | undefined;
  textRegion?: string;
  statusText?: string;
}
export interface IEditStore {
  storeId: string;
  editStoreCity: number;
  editStoreNm: string;
  editStoreAddress: string;
  editStoreAddressSub?: string;
  editStoreTel: string;
}
export interface IStoreInfoState {
  storeInfomation: IStoreInfo;
  setStoreInfomation: React.Dispatch<React.SetStateAction<IStoreInfo>>;
  editZip?: IEditStore | string;
  setEditZip?: React.Dispatch<React.SetStateAction<IEditStore | string>>;
  sortOption: IMemberSortOption;
  sortSearch: string;
  textSearch: string;
  paginate: IinitialPg;
  setPaginate: React.Dispatch<React.SetStateAction<IinitialPg>>;
}
export interface INewStoreState {
  newStoreInfo: IStoreDetailList;
  setNewStoreInfo: React.Dispatch<React.SetStateAction<IStoreDetailList>>;
}
export interface IStoreAddressState {
  calendarlocation: string;
  setCalendarLocation: React.Dispatch<React.SetStateAction<string>>;
}
