/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/

// [관리자] 상품 리스트 데이터 타입 정의
export interface IproductListPage {
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
  productList: Array<IproductList>;
}
export interface IproductList {
  productId: number;
  nmKor: string;
  price: number;
  promotion: number;
  beginner: number;
  quantity: number;
}
