import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductListTitleWrap } from "../../style/ProductListStyle";

const ProductListTitle = () => {
  const { ilist } = useParams();
  const [subtitleText, setSubTitleText] = useState("");
  const [maintitleText, setMainTitleText] = useState("");
  const titleData = [
    {
      subText: "깊고 풍부한 맛의",
      mainText: "레드 와인",
    },
    {
      subText: "상큼하고 깨끗한",
      mainText: "화이트 와인",
    },
    {
      subText: "화려한 거품과 화사한 맛",
      mainText: "스파클링 와인",
    },
    {
      subText: "더욱 풍부한 와인 경험을 제공할",
      mainText: "기타 와인",
    },
  ];
  useEffect(() => {
    const findParam = titleData.find((item, index) => index == ilist);
    if (findParam) {
      setSubTitleText(findParam.subText);
      setMainTitleText(findParam.mainText);
    }
  });
  return (
    <ProductListTitleWrap ilist={ilist}>
      <h2>
        <span>{subtitleText}</span>
        {maintitleText}
      </h2>
    </ProductListTitleWrap>
  );
};

export default ProductListTitle;
