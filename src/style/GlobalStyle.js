import styled from "@emotion/styled";

// 가로폭
export const WidthPd = {
  padding: "0 2%",
};

// 컬러 ================
// 메인색상
export const Maincolor = {
  beige: "#fcf8f1",
  white: "#fff",
  black: "#3c2323",
  redDeep: "#690a21",
  redBold: "#7c1d34",
  redMedium: "#9a6a6a",
  grayBold: "#837575",
  grayMedium: "#e7e4e4",
};
// 그라데이션
export const Gradation = {
  wineA: "#611c32",
  wineB: "#79213d",
  wineC: "#912648",
  wineD: "#a92b52",
  wineE: "#c1305d",
};
// 투명도
export const opacity = {
  wine: "rgba(124, 29, 52, 0.65)",
  gray: "rgba(60, 35, 35, 0.3)",
  white: "rgba(60, 35, 35, 0.07)",
  whiteB: "rgba(255, 255, 255, 0.3)",
};
// 뱃지
export const badge = {
  pink: "#ff8888",
  green: "#a7ce81",
};

// 버튼 ================
// 확인
export const ButtonOk = styled.button`
  display: block;
  background: ${Maincolor.redBold};
  color: ${Maincolor.white};
  border: 0.05rem solid ${Maincolor.redBold};
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  &:hover {
    background: ${Maincolor.redDeep};
  }
`;
// 취소
export const ButtonCancel = styled.button`
  display: block;
  background: ${Maincolor.white};
  color: ${Maincolor.black};
  border: 0.05rem solid ${Maincolor.grayMedium};
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
`;

// 말줄임 ================
export const ellipsis = {
  // 한줄
  one: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  // 두줄
  two: {
    wordWrap: "break-word",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  // 세줄
  three: {
    wordWrap: "break-word",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
};
