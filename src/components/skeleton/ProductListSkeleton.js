import React from "react";
import { LoadingProductListItem } from "../../style/SkeletonStyle";

const ProductListSkeleton = () => {
  return (
    <LoadingProductListItem>
      <div className="img"></div>
      <div className="title"></div>
      <div className="price"></div>
      <div className="sale"></div>
    </LoadingProductListItem>
  );
};

export default ProductListSkeleton;
