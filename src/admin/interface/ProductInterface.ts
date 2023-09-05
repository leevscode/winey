/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/

import { CheckboxValueType } from "antd/es/checkbox/Group";
import { UploadFile } from "antd";

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
  productId?: string;
  nmKor: string | undefined;
  nmEng: string | undefined;
  price: number | null;
  promotion: number;
  beginner: number;
  alcohol: number | null;
  quantity: number | null;
  pic?: string | undefined;
  country: number;
  sweety: number;
  acidity: number;
  body: number;
  category: number;
  aroma: CheckboxValueType[];
  sale: number | null;
  salePrice: number;
  startSale: string | undefined;
  endSale: string | undefined;
  smallCategoryId: CheckboxValueType[];
  saleYn: number;
}
// 상품 등록 POST 데이터 타입 정의
export interface IProductPost {
  postProductData: Iproduct;
  setPostProductData: React.Dispatch<React.SetStateAction<Iproduct>>;
  nameNoKr?: boolean;
  nameNoEn?: boolean;
  priceNo?: boolean;
}
export interface IProductPut {
  postProductData: Iproduct;
  setPostProductData: React.Dispatch<React.SetStateAction<Iproduct>>;
  nameNoKr?: boolean;
  nameNoEn?: boolean;
  priceNo?: boolean;
  saleYnCheck?: number;
  setSaleYnCheck?: React.Dispatch<React.SetStateAction<number | undefined>>;
  saleDisabled?: boolean;
  setSaleDisabled?: React.Dispatch<React.SetStateAction<boolean>>;
  dateDisabled?: boolean;
  setDateDisabled?: React.Dispatch<React.SetStateAction<boolean>>;
}
