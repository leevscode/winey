/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/

// [관리자] 상품 리스트 데이터 타입 정의
// 상품 리스트 페이징
export interface IproductListPage {
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
}
// 상품 리스트 페이징 state
export interface IproductListPageState {
  admProductListPage: IproductListPage;
}
// 상품 리스트
export interface IproductList {
  productId: number;
  nmKor: string;
  price: number;
  promotion: number;
  beginner: number;
  quantity: number;
  sale: number;
  salePrice: number;
}
// [관리자] 상품 등록 데이터 타입 정의
export interface Iproduct {
  nmKor: string;
  nmEng: string;
  price: 0;
  promotion: 0;
  beginner: 0;
  alcohol: 0;
  quantity: 0;
  country: 0;
  sweety: 0;
  acidity: 0;
  body: 0;
  category: 0;
  aroma: number[];
  sale: 0;
  salePrice: 0;
  startSale: string;
  endSale: string;
  smallCategoryId: number[];
}
