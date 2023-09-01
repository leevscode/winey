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
  storeId: number;
  regionNmId: number;
  nm: string;
  tel: string;
  textRegion?: string;
}

export interface IStoreInfoState {
  storeInfomation: IStoreInfo;
  setStoreInfomation: React.Dispatch<React.SetStateAction<IStoreInfo>>;
}
