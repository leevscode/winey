/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React from "react";
import KeywordChooseCp from "../../components/join/KeywordChooseCp";
export const wineOptions = {
  categoryId: [
    { id: 1, value: "레드" },
    { id: 2, value: "화이트" },
    { id: 3, value: "스파클링" },
    { id: 4, value: "기타" },
  ],
  priceRange: [
    { id: 1, value: "2만원미만" },
    { id: 2, value: "2~5만원" },
    { id: 3, value: "5~10만원" },
    { id: 4, value: "10만원이상" },
  ],
  smallCategoryId: [
    { id: 1, value: "스테이크" },
    { id: 2, value: "돼지고기" },
    { id: 3, value: "치킨" },
    { id: 4, value: "해산물" },
    { id: 5, value: "어패류" },
    { id: 6, value: "샐러드" },
    { id: 7, value: "튀김" },
    { id: 8, value: "치즈" },
    { id: 9, value: "과일" },
    { id: 10, value: "한식" },
    { id: 11, value: "피자" },
    { id: 12, value: "디저트" },
  ],
  aromaCategoryId: [
    { id: 1, value: "꽃" },
    { id: 2, value: "식물" },
    { id: 3, value: "과일" },
    { id: 4, value: "향신료" },
    { id: 5, value: "흙냄새" },
    { id: 6, value: "오크" },
    { id: 7, value: "견과류" },
  ],
  countryId: [
    { id: 1, value: "미국" },
    { id: 2, value: "스페인" },
    { id: 3, value: "이탈리아" },
    { id: 4, value: "칠레" },
    { id: 5, value: "포르투갈" },
    { id: 6, value: "프랑스" },
  ],
};
const KeywordSelect = () => {
  return (
    <div>
      <KeywordChooseCp />
    </div>
  );
};

export default KeywordSelect;
