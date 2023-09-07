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
  _textSearch: string | null,
) => {
  try {
    const res = await client.get(
      `/api/admin/product/list?page=${_page}&size=10&sort=${_type}%2C${_sort}${
        _textSearch !== "" ? `&str=${_textSearch}` : ""
      }`,
    );
    const result = res.data;
    const data = result.content;
    const pageData = result.pageableCustom.totalElements;
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
  _setPostProductData: React.Dispatch<React.SetStateAction<Iproduct>>,
  _setSaleYnCheck: React.Dispatch<React.SetStateAction<number | undefined>>,
  _setSaleDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  _setDateDisabled: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    const res = await client.get(
      `/api/admin/product/detail?productId=${_iproduct}`,
    );
    const result = res.data;
    // console.log("전송받는 데이터", result);
    _setPostProductData({
      productId: result.productId,
      nmKor: result.nmKor,
      nmEng: result.nmEng,
      price: result.price,
      promotion: result.promotion,
      beginner: result.beginner,
      alcohol: result.alcohol,
      quantity: result.quantity,
      pic: result.pic,
      country: result.country,
      sweety: result.sweety,
      acidity: result.acidity,
      body: result.body,
      category: result.category,
      aroma: result.aroma,
      sale: result.sale,
      salePrice: result.salePrice,
      startSale: result.startSale,
      endSale: result.endSale,
      smallCategoryId: result.smallCategoryId,
      saleYn: result.saleYn,
    });
    // 수정 페이지 할인 여부 설정 버튼 이벤트
    const productEdit = () => {
      if (result.saleYn === 0) {
        // console.log("할인하지 않음");
        _setSaleYnCheck(1);
        _setSaleDisabled(true);
        _setDateDisabled(true);
      } else if (result.endSale.includes("2999")) {
        // console.log("상시 할인");
        _setSaleYnCheck(2);
        _setSaleDisabled(false);
        _setDateDisabled(true);
      } else if (result.saleYn === 1) {
        // console.log("기간별 할인");
        _setSaleYnCheck(3);
        _setSaleDisabled(false);
        _setDateDisabled(false);
      }
    };
    productEdit();
    return result;
  } catch (err) {
    console.log("상품 수정을 위한 각각의 상품별 GET 실패", err);
  }
};
// 상품 등록 PUT
export const getAdmProductPut = async (_data: any) => {
  try {
    const res = await client.put("/api/admin", _data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = res.data;
    console.log("데이터 수정합니다.", result);
    return result;
  } catch (err) {
    console.log("상품 수정 실패", err);
  }
};
// 상품 이미지 DELETE
export const getProductImgDel = async (_iproduct: string | undefined) => {
  try {
    // const res = await client.delete("/api/admin", {
    const res = await client.delete(
      `/api/admin/product/pic?productId=${_iproduct}`,
      {
        data: _iproduct,
      },
    );
    const result = res.data;
    console.log("이미지 DELETE", result);
    return result;
  } catch (err) {
    console.log("이미지 DELETE 실패", err);
  }
};
