/*
    작업자 : 이동은
    노션 : https://leevscode.notion.site/leevscode/leevscode-105a8fbbc74e446fa6e87b0418508fdb
    깃허브 : https://github.com/leevscode
*/
export interface OdData {
  orderId: number;
  orderDate: number;
  email?: number;
  nmKor?: number;
  salePrice: number;
  quantity: number;
  totalPrice: number;
  payment?: number;
  pickUpStore: string;
  storeNm: string;
  pickUpDate: number;
  pickUpTime: number;
  orderStatus: number;
  uniqueId: number;
}

export interface OdData2 {
  orderId: number;
  orderDate: number;
  email?: string;
  nmKor?: number;
  salePrice: number;
  quantity: number;
  totalPrice: number;
  payment?: number;
  storeNm?: string;
  pickUpDate: number;
  pickUpTime: number;
  orderStatus: number;
  orderSt?: string;
}
