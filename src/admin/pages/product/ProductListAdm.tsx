/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { LayoutTable, TableWrap } from "../../style/AdminLayoutStyle";
import {
  IproductList,
  IproductListPage,
} from "../../interface/ProductInterface";
import { getAdmProductList } from "../../api/patchAdmProduct";

const ProductListAdm = () => {
  // 테이블 샘플 데이터
  // const tableData = [
  //   {
  //     idata: 1,
  //     data_a: "회원번호 1",
  //     data_b: "아이디 1",
  //     data_c: "이름 1",
  //     data_d: "생년월일 1",
  //     data_e: "주 픽업지역 1",
  //     data_f: "주문내역 1",
  //     data_g: "회원삭제 1",
  //   },
  //   {
  //     idata: 2,
  //     data_a: "회원번호 2",
  //     data_b: "아이디 2",
  //     data_c: "이름 2",
  //     data_d: "생년월일 2",
  //     data_e: "주 픽업지역 2",
  //     data_f: "주문내역 2",
  //     data_g: "회원삭제 2",
  //   },
  //   {
  //     idata: 3,
  //     data_a: "회원번호 3",
  //     data_b: "아이디 3",
  //     data_c: "이름 3",
  //     data_d: "생년월일 3",
  //     data_e: "주 픽업지역 3",
  //     data_f: "주문내역 3",
  //     data_g: "회원삭제 3",
  //   },
  // ];
  // 등록된 상품 리스트 GET한 데이터 보관할 state
  const [admProductList, setAdmProductList] = useState<Array<IproductList>>([]);

  // 상품 페이징 숫자 보관할 state
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    getAdmProductList(page, setAdmProductList);
    console.log("뭐시기", ...admProductList);
  }, []);
  return (
    <TableWrap>
      <LayoutTable>
        <caption>등록상품 리스트</caption>
        <thead>
          <tr>
            <th>상품번호</th>
            <th>상품명</th>
            <th>정상가</th>
            <th>할인율</th>
            <th>판매가격</th>
            <th>행사상품</th>
            <th>재고수량</th>
            <th>품절여부</th>
            <th>수정</th>
          </tr>
        </thead>
        <tbody>
          {/* {productListData.map((item: IproductList) => (
            <tr key={item.productId}>
              <td>{item.nmKor}</td>
              <td>{item.price}</td>
              <td>{item.price}</td>
              <td>{item.price}</td>
              <td>{item.price}</td>
              <td>{item.price}</td>
              <td>{item.price}</td>
              <td>{item.price}</td>
              <td>{item.price}</td>
            </tr>
          ))} */}
        </tbody>
      </LayoutTable>
    </TableWrap>
  );
};

export default ProductListAdm;
