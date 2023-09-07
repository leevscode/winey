import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductListTitleWrap } from "../../style/ProductListStyle";

const ProductListTitle = () => {
  const { pathname } = useLocation();
  // pathname에서 /productlist/ 는 제외처리
  const listPathName = pathname.slice(13);
  // 타이틀 작은 글자
  const [subtitleText, setSubTitleText] = useState("");
  // 타이틀 큰 글자
  const [maintitleText, setMainTitleText] = useState("");
  // productlist 타이틀 내용
  const titleData = [
    {
      listName: "red",
      subText: "깊고 풍부한 맛의",
      mainText: "레드 와인",
    },
    {
      listName: "white",
      subText: "상큼하고 깨끗한",
      mainText: "화이트 와인",
    },
    {
      listName: "spakling",
      subText: "화려한 거품과 화사한 맛",
      mainText: "스파클링 와인",
    },
    {
      listName: "etc",
      subText: "더욱 풍부한 와인 경험을 제공할",
      mainText: "기타 와인",
    },
    {
      listName: "sale",
      subText: "가을의 매력을 와인 한 잔과 함께 느껴보세요.",
      mainText: "9월의 할인 상품",
    },
  ];
  // listPathName이 갱신될 때 마다 useEffect 실행
  useEffect(() => {
    const findParam = titleData.find(item => item.listName == listPathName);
    // console.log(listPathName);
    if (findParam) {
      setSubTitleText(findParam.subText);
      setMainTitleText(findParam.mainText);
    }
  }, [listPathName]);
  return (
    <ProductListTitleWrap listPathName={listPathName}>
      <h2>
        <span>{subtitleText}</span>
        {maintitleText}
      </h2>
    </ProductListTitleWrap>
  );
};

export default ProductListTitle;
