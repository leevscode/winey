/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import axios from "axios";
import {
  Iproduct,
  IproductList,
  IproductListPage,
} from "../interface/ProductInterface";
import { Dispatch } from "react";
import { client } from "../../api/client";

// 등록된 상품 리스트 GET
export const getAdmProductList = async (
  _page: number,
  _type: string,
  _sort: string,
  _setAdmProductList: Dispatch<React.SetStateAction<IproductList[]>>,
  _setTotalPage: Dispatch<React.SetStateAction<number>>,
) => {
  try {
    const res = await client.get(
      `/api/admin/product/list?page=${_page}&row=10&type=${_type}&sort=${_sort}`,
    );
    const result = res.data;
    const data = result.productList;
    const pageData = result.page.totalRecordCount;
    _setAdmProductList(data);
    _setTotalPage(pageData);
    // console.log("등록된 상품 리스트 GET", result);
    // console.log("productlist 값만 사용합니다", data);
    // console.log("총 상품 갯수만 사용합니다", pageData);
    return result;
  } catch (err) {
    console.log("등록된 상품 리스트 GET 에러 발생", err);
  }
};
// 상품 등록 POST
export const getAdmProductPost = async (_data: any) => {
  try {
    const res = await client.post("/api/admin", _data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = res.data;
    console.log("전송되는 데이터", result);
    return result;
  } catch (err) {
    console.log("상품 등록 실패", err);
  }
};
// 상품 수정을 위한 각각의 상품별 GET
export const getAdmProductDetail = async (
  _iproduct: string | undefined,
  _setProductNameKr: Dispatch<React.SetStateAction<string | undefined>>,
) => {
  try {
    const res = await client.get(
      `/api/admin/product/detail?productId=${_iproduct}`,
    );
    const result = res.data;
    // console.log("전송받는 데이터", result);
    // console.log(result.nmKor);
    _setProductNameKr(result.nmKor);
    return result;
  } catch (err) {
    console.log("상품 수정을 위한 각각의 상품별 GET 실패", err);
  }
};
