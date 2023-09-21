/*
    작업자 : 이동은
    노션 : https://leevscode.notion.site/leevscode/leevscode-105a8fbbc74e446fa6e87b0418508fdb
    깃허브 : https://github.com/leevscode
*/
export interface fetchData {
  id: number;
  orderDate: number;
  email?: number;
  nmKor?: number;
  quantity: number;
  totalPrice: number;
  payment?: number;
  pickUpStore: string;
  orderStatus: number;
  Navigate: string;
  orderId: number;
  totalRecordCount: number;
  content: number;
}

export interface fetchData2 {
  endPage: number;
  next: boolean;
  pageableCustom: number;
  pageSize: number;
  prev: boolean;
  row: number;
  startIdx: number;
  startPage: number;
  totalPage: number;
  totalElements: number;
}

export interface ControllSortOption {
  type: string;
  sort: string;
}
