import React from "react";
import {
  ProductCompleteBox,
  ProductCompleteinfo,
} from "../../style/ProductCompleteStyle";
import { ButtonOk } from "../../style/GlobalStyle";

const SellListDetail = () => {
  return (
    <div>
      <ProductCompleteinfo>
        <img src="https://via.placeholder.com/200x200" alt="" />
        <ul>
          <li>제프 까렐, 울띰 헤꼴뜨</li>
          <li>Ultime Recolte By Jeff Carrel</li>
          <li>32,900원</li>
        </ul>
      </ProductCompleteinfo>
      <ProductCompleteBox>
        <ButtonOk>평점 등록</ButtonOk>
      </ProductCompleteBox>
    </div>
  );
};

export default SellListDetail;
