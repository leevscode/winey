import React from "react";
import { QuickProductListWrap } from "../style/ProductListStyle";

const QuickProductList = () => {
  return (
    <QuickProductListWrap>
      <ul>
        <li>
          <button>육류</button>
        </li>
        <li>
          <button>해산물</button>
        </li>
        <li>
          <button>유제품</button>
        </li>
        <li>
          <button>야채</button>
        </li>
        <li>
          <button>디저트</button>
        </li>
      </ul>
    </QuickProductListWrap>
  );
};

export default QuickProductList;
