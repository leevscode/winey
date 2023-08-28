/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import {
  DetailBt,
  TableHorizontal,
  TableLayoutContents,
  TableLayoutTitle,
  TableVertical,
  TableWrap,
} from "../../style/AdminLayoutStyle";
import {
  IproductList,
  IproductListPage,
} from "../../interface/ProductInterface";
import { getAdmProductList } from "../../api/patchAdmProduct";
import { useOutletContext } from "react-router-dom";

const ProductListAdm = () => {
  const { listPathName } = useOutletContext() as { listPathName: string };
  // console.log("listPathName 불러옵니다.", listPathName);
  /* 
  [ 테이블 넓이 비율 설정 ]
  · 테이블의 열(columns) 값을 설정할 수 있습니다. 
  · 예를들어, 9개의 데이터를 출력해야 한다면 column도 9개를 작성해주셔야 합니다.
  · 1fr은 정사이즈이며, 기본값입니다.
  · 정사이즈보다 좁게 설정하고싶다면 1보다 작은 값을, 넓게 설정하고싶다면 1보다 큰 값을 설정하면 되는데 소숫점으로 설정해주시면 미세하게 넓이 조절이 가능합니다!
  */
  const gridTemplateColumns = {
    columns: "0.4fr 1.8fr 0.8fr 0.6fr 0.8fr 0.55fr 0.5fr 0.4fr 0.45fr",
  };
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
      {/* 데이터 테이블 - 세로형 */}
      <TableVertical>
        {/* 데이터 테이블 - 타이틀 */}
        <TableLayoutTitle
          listPathName={listPathName}
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
        </TableLayoutTitle>
        {/* 데이터 테이블 - 내용 */}
        {admProductList.map((item: IproductList) => (
          <TableLayoutContents
            listPathName={listPathName}
            key={item.productId}
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
          </TableLayoutContents>
        ))}
      </TableVertical>
      {/* 데이터 테이블 - 가로형 */}
      <TableHorizontal listPathName={listPathName}>
        {/* 데이터 테이블 - 타이틀 */}
        <table>
          <caption>데이터테이블</caption>
          <tbody>
            <tr>
              <th className="table-title">주문수량</th>
              <td className="table-content">3</td>
              <th className="table-title">픽업 장소</th>
              <td className="table-content">서울 목동점</td>
            </tr>
            <tr>
              <th className="table-title">총 결제 금액</th>
              <td className="table-content">39800 원</td>
              <th className="table-title">픽업 날짜</th>
              <td className="table-content">23-07-11</td>
            </tr>
            <tr>
              <th className="table-title">결제 수단</th>
              <td className="table-content">카드결제</td>
              <th className="table-title">픽업 시간</th>
              <td className="table-content">13:00</td>
            </tr>
            <tr>
              <th className="table-title">픽업 완료 여부</th>
              <td className="table-content">Y</td>
              <th className="table-title">픽업 완료 여부</th>
              <td className="table-content">Y</td>
            </tr>
          </tbody>
        </table>
      </TableHorizontal>
    </TableWrap>
  );
};

export default ProductListAdm;
