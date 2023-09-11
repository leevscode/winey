//선택값 변환 option
export const getCategory = categoryId => {
  switch (categoryId) {
    case 1:
      return "레드";
    case 2:
      return "화이트";
    case 3:
      return "스파클링";
    case 4:
      return "기타";
    default:
      return "";
  }
};

export const getFood = bigCategoryId => {
  switch (bigCategoryId) {
    case 1:
      return "육류";
    case 2:
      return "해산물";
    case 3:
      return "기타";
    default:
      return "";
  }
};
export const getPrice = priceId => {
  switch (priceId) {
    case 1:
      return "2만원미만";
    case 2:
      return "2~5만원";
    case 3:
      return "5만원~10만원";
    case 4:
      return "10만원이상";
    default:
      return "";
  }
};
export const getCountry = countryId => {
  switch (countryId) {
    case 1:
      return "미국";
    case 2:
      return "기타";
    case 3:
      return "프랑스";
    case 4:
      return "이탈리아";
    case 5:
      return "기타";
    case 6:
      return "칠레";
    default:
      return "";
  }
};

export const wineSearchOptions = {
  cate: [
    {
      id: 1,
      value: "레드",
    },
    {
      id: 2,
      value: "화이트",
    },
    {
      id: 3,
      value: "스파클링",
    },
    {
      id: 4,
      value: "기타",
    },
  ],
  price: [
    {
      id: 1,
      value: "2만원미만",
    },
    {
      id: 2,
      value: "2~5만원",
    },
    {
      id: 3,
      value: "5~10만원",
    },
    {
      id: 4,
      value: "10만원이상",
    },
  ],
  bigCate: [
    {
      id: 1,
      value: "육류",
    },
    {
      id: 2,
      value: "해산물",
    },
    {
      id: 3,
      value: "기타",
    },
  ],
  country: [
    {
      id: 1,
      value: "미국",
    },
    {
      id: 3,
      value: "프랑스",
    },
    {
      id: 4,
      value: "이탈리아",
    },
    {
      id: 6,
      value: "칠레",
    },
    {
      id: 2,
      value: "기타",
    },
  ],
};

// 정렬 옵션
export const sortingOptions = [
  {
    value: 0,
    label: "오랜등록순",
  },
  {
    value: 1,
    label: "최신등록순",
  },
  {
    value: 2,
    label: "높은가격순",
  },
  {
    value: 3,
    label: "낮은가격순",
  },
];
