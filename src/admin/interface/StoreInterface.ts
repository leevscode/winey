/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

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
  storeId?: string;
  textRegion?: string;
  statusText?: string;
}
export interface IEditStore {
  storeId: string;
  editStoreCity: number;
  editStoreNm: string;
  editStoreAddress: string;
  editStoreTel: string;
}
export interface IStoreInfoState {
  storeInfomation: IStoreInfo;
  setStoreInfomation: React.Dispatch<React.SetStateAction<IStoreInfo>>;
  editZip?: IEditStore;
}
export interface INewStoreState {
  newStoreInfo: IStoreDetailList;
  setNewStoreInfo: React.Dispatch<React.SetStateAction<IStoreDetailList>>;
}
export interface IStoreAddressState {
  calendarlocation: string;
  setCalendarLocation: React.Dispatch<React.SetStateAction<string>>;
}
