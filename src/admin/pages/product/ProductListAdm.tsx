/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IproductList } from "../../interface/ProductInterface";
import { getAdmProductList } from "../../api/patchAdmProduct";
import ProductControlPaginate from "../../components/product/ProductControlPaginate";
import ProductControlSort from "../../components/product/ProductControlSort";
import {
  DetailBt,
  PaginationWrap,
  TableLayoutContents,
  TableLayoutTitle,
  TableVertical,
  TableWrap,
} from "../../style/AdminLayoutStyle";
import { AdmProductWrap } from "../../style/product/AdminProductStyle";

const ProductListAdm = () => {
  const navigate = useNavigate();
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
    columns: "0.4fr 2fr 0.7fr 0.4fr 0.7fr 0.55fr 0.5fr 0.4fr 0.45fr",
  };
  // 등록된 상품 리스트 GET한 데이터 보관할 state
  const [admProductList, setAdmProductList] = useState<Array<IproductList>>([]);
  // 상품 페이징 숫자 보관할 state
  const [page, setPage] = useState<number>(1);
  // 총 상품 갯수 보관할 state
  const [totalPage, setTotalPage] = useState<number>(0);
  // 상품 정렬 보관할 state
  const [type, setType] = useState<string>("productid");
  // 오름차순, 내림차순 보관할 state
  const [sort, setSort] = useState<string>("desc");
  // 검색어 입력 state
  const [textSearch, setTextSearch] = useState<string | null>("");
  // console.log("textSearch", textSearch);
  // 수정 버튼 클릭 시 상품 정보 수정페이지 이동
  useEffect(() => {
    // console.log("화면 전환합니다");
    getAdmProductList(
      page - 1,
      type,
      sort,
      setAdmProductList,
      setTotalPage,
      textSearch,
    );
  }, [page, type, sort, textSearch]);
  return (
    <AdmProductWrap>
      {/* 상품 총 갯수 표시, 상품 등록 링크 */}
      <div className="table-top">
        <p className="total-count">
          총 <span>{totalPage}</span>개
        </p>
        <ProductControlSort
          setType={setType}
          setSort={setSort}
          setTextSearch={setTextSearch}
        />
      </div>
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
            <li>판매가격</li>
            <li>할인율</li>
            <li>정상가</li>
            <li>행사상품</li>
            <li>재고수량</li>
            <li>품절여부</li>
            <li>수정</li>
          </TableLayoutTitle>
          {/* 데이터 테이블 - 내용 */}
          {admProductList?.map((item: IproductList) => (
            <TableLayoutContents
              listPathName={listPathName}
              key={item.productId}
              style={{
                gridTemplateColumns: gridTemplateColumns.columns,
              }}
            >
              <li>{item.productId}</li>
              <li className="tal">{item.nmKor}</li>
              <li>{item.salePrice.toLocaleString()}원</li>
              <li>{item.sale}%</li>
              <li>{item.price.toLocaleString()}원</li>
              <li className="tal">
                {item.promotion === 1 && (
                  <span className="icon">· 추천상품</span>
                )}
                {item.beginner === 1 && (
                  <span className="icon">· 입문자추천</span>
                )}
              </li>
              <li>{item.quantity}개</li>
              <li>{item.quantity === 0 ? "Y" : "N"}</li>
              <li>
                <DetailBt
                  onClick={() => navigate(`../productedit/${item.productId}`)}
                >
                  수정
                </DetailBt>
              </li>
            </TableLayoutContents>
          ))}
        </TableVertical>
      </TableWrap>
      {/* 페이지네이션 */}
      <PaginationWrap>
        <ProductControlPaginate
          page={page}
          setPage={setPage}
          totalPage={totalPage}
        />
      </PaginationWrap>
    </AdmProductWrap>
  );
};

export default ProductListAdm;
