import React from "react";
import { LayoutTable, TableWrap } from "../../style/AdminLayoutStyle";

const ProductListAdm = () => {
  // 테이블 샘플 데이터
  const tableData = [
    {
      idata: 1,
      data_a: "회원번호 1",
      data_b: "아이디 1",
      data_c: "이름 1",
      data_d: "생년월일 1",
      data_e: "주 픽업지역 1",
      data_f: "주문내역 1",
      data_g: "회원삭제 1",
    },
    {
      idata: 2,
      data_a: "회원번호 2",
      data_b: "아이디 2",
      data_c: "이름 2",
      data_d: "생년월일 2",
      data_e: "주 픽업지역 2",
      data_f: "주문내역 2",
      data_g: "회원삭제 2",
    },
    {
      idata: 3,
      data_a: "회원번호 3",
      data_b: "아이디 3",
      data_c: "이름 3",
      data_d: "생년월일 3",
      data_e: "주 픽업지역 3",
      data_f: "주문내역 3",
      data_g: "회원삭제 3",
    },
  ];
  return (
    <TableWrap>
      <LayoutTable>
        <caption>테이블</caption>
        <thead>
          <tr>
            <th>회원번호</th>
            <th>아이디</th>
            <th>이름</th>
            <th>생년월일</th>
            <th>주 픽업지역</th>
            <th>주문내역</th>
            <th>회원삭제</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(item => (
            <tr key={item.idata}>
              <td>{item.data_a}</td>
              <td>{item.data_b}</td>
              <td>{item.data_c}</td>
              <td>{item.data_d}</td>
              <td>
                <p>{item.data_e}</p>
              </td>
              <td>{item.data_f}</td>
              <td>{item.data_g}</td>
            </tr>
          ))}
        </tbody>
      </LayoutTable>
    </TableWrap>
  );
};

export default ProductListAdm;
