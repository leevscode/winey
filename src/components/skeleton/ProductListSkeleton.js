import React from "react";
import { LoadingProductListItem, floating } from "../../style/SkeletonStyle";
import { css } from "@emotion/react";

const ProductListSkeleton = () => {
  return (
    <LoadingProductListItem
      css={css`
        animation: ${floating} 1s ease infinite;
      `}
    >
      <div className="img"></div>
      <div className="title"></div>
      <div className="price"></div>
      <div className="sale"></div>
    </LoadingProductListItem>
  );
};

export default ProductListSkeleton;
