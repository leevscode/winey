/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import axios from "axios";
import { IproductList, IproductListPage } from "../interface/ProductInterface";
import { Dispatch } from "react";

// 등록된 상품 리스트 GET
export const getAdmProductList = async (
  _page: number,
  _setAdmProductList: Dispatch<React.SetStateAction<IproductList[]>>,
) => {
  try {
    const res = await axios.get(`/api/admin/product/list?page=${_page}&row=20`);
    const result = res.data;
    const data = result.productList;
    _setAdmProductList(data);
    // console.log("등록된 상품 리스트 GET", result);
    console.log("productlist 값만 사용합니다", data);
    return result;
  } catch (err) {
    console.log("등록된 상품 리스트 GET 에러 발생", err);
  }
};
