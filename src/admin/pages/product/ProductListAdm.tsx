/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import {
  DetailBt,
  LayoutTable,
  TableLayout,
  TableWrap,
} from "../../style/AdminLayoutStyle";
import {
  IproductList,
  IproductListPage,
} from "../../interface/ProductInterface";
import { getAdmProductList } from "../../api/patchAdmProduct";

const ProductListAdm = () => {
  // 테이블 넓이 비율 설정
  /* 
  · 테이블의 열(columns) 값을 설정할 수 있습니다. 
  · 예를들어, 9개의 데이터를 출력해야 한다면 columns도 9개를 작성해주셔야 합니다.
  · 1fr은 정사이즈이며, 기본값입니다.
  · 정사이즈보다 좁게 설정하고싶다면 1보다 작은 값을, 넓게 설정하고싶다면 1보다 큰 값을 설정하면 되는데 되도록이면 소숫점으로 설정해주시면 미세하게 넓이 조절이 가능합니다!
  */
  const gridTemplateColumns = {
    columns: "0.4fr 1.8fr 0.8fr 0.6fr 0.8fr 0.6fr 0.6fr 0.45fr 0.45fr",
  };
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
    // console.log("데이터 담았습니다", admProductList);
  }, []);
  return (
    <TableWrap>
      {/* <LayoutTable>
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
          {admProductList.map((item: IproductList) => (
            <tr key={item.productId}>
              <td>{item.productId}</td>
              <td>
                <p>{item.nmKor}</p>
              </td>
              <td>{item.price.toLocaleString()}원</td>
              <td>확인필요</td>
              <td>확인필요</td>
              <td>
                {item.promotion === 1 && (
                  <span className="icon">· 추천상품</span>
                )}
                {item.beginner === 1 && (
                  <span className="icon">· 입문자추천</span>
                )}
              </td>
              <td>{item.quantity}개</td>
              <td>{item.quantity === 0 ? "Y" : "N"}</td>
              <td>
                <DetailBt>수정</DetailBt>
              </td>
            </tr>
          ))}
        </tbody>
      </LayoutTable> */}
      {/* 테이블 디자인 ul로 변경 */}
      <TableLayout>
        <ul
          className="table-title"
          style={{
            gridTemplateColumns: gridTemplateColumns.columns,
          }}
        >
          <li>상품번호</li>
          <li>상품명</li>
          <li>정상가</li>
          <li>할인율</li>
          <li>판매가격</li>
          <li>행사상품</li>
          <li>재고수량</li>
          <li>품절여부</li>
          <li>수정</li>
        </ul>
        {admProductList.map((item: IproductList) => (
          <ul
            key={item.productId}
            className="table-contents"
            style={{
              gridTemplateColumns: gridTemplateColumns.columns,
            }}
          >
            <li>{item.productId}</li>
            <li className="tal">{item.nmKor}</li>
            <li>{item.price.toLocaleString()}원</li>
            <li>확인필요</li>
            <li>확인필요</li>
            <li className="tal">
              {item.promotion === 1 && <span className="icon">· 추천상품</span>}
              {item.beginner === 1 && (
                <span className="icon">· 입문자추천</span>
              )}
            </li>
            <li>{item.quantity}개</li>
            <li>{item.quantity === 0 ? "Y" : "N"}</li>
            <li>
              <DetailBt>수정</DetailBt>
            </li>
          </ul>
        ))}
      </TableLayout>
    </TableWrap>
  );
};

export default ProductListAdm;
