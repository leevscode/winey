import React from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { ProductListTitleWrap } from "../../style/ProductListStyle";

const ProductListTitle = () => {
  const { ilist } = useParams();
  // console.log(ilist);
  return (
    <ProductListTitleWrap ilist={ilist}>
      <h2>
        <span>깊고 풍부한 맛의</span>
        레드 와인
      </h2>
    </ProductListTitleWrap>
    // <ThemeProvider theme={}>

    // </ThemeProvider>
  );
};

export default ProductListTitle;
