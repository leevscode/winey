/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/
import styled from "@emotion/styled";

export const WidthPd = {
  padding: "0 2%",
  paddingTopSmall: "1.5rem",
};

export const opacity = {
  wine: "rgba(124, 29, 52, 0.65)",
  grayDeep: "rgba(60, 35, 35, 0.5)",
  gray: "rgba(60, 35, 35, 0.3)",
  grayLight: "rgba(60, 35, 35, 0.1)",
  white: "rgba(60, 35, 35, 0.07)",
  whiteB: "rgba(255, 255, 255, 0.3)",
  whiteC: "rgba(60, 35, 35, 0.03)",
};

export const Maincolor = {
  beige: "#fcf8f1",
  white: "#fff",
  black: "#3c2323",
  redDeep: "#690a21",
  redBold: "#7c1d34",
  redMedium: "#9a6a6a",
  grayBold: "#837575",
  grayDeep: "#6b5b5b",
  grayMedium: "#e7e4e4",
};

export const DetailDay = styled.div`
  display: flex;
  padding: 10px;
  font-size: 2rem;
`;
// 상품상세내역 감싸는 div
export const SellListDetailBox = styled.div`
  padding-top: ${WidthPd.paddingTopSmall};
  padding-bottom: 140px;
  .box-list {
    margin: ${WidthPd.padding};
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 0.05rem solid ${opacity.white};
  }
`;

export const SellListDetailText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  img {
    margin-bottom: 20px;
  }
  p {
    font-weight: bold;
    color: ${Maincolor.black};
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  span {
    color: ${Maincolor.grayBold};
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

export const SellListDetailWrap = styled.div`
  /* margin-bottom: 15px; */
  position: relative;
  padding-top: 30%;
  border: 0.05rem solid ${opacity.grayLight};
  overflow: hidden;
  isolation: isolate;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 10px;
  }
`;

export const SellListDetailinfo = styled.div`
  display: flex;
  /* padding: 0 20px; */
  margin-bottom: 2rem;
  .box-text {
    padding-left: 1.5rem;
    width: calc(100% - 15rem - 1.5rem);
  }
  div {
    /* margin-right: 30px; */
    /* margin-bottom: 30px; */
    /* display: flex; */
    /* width: 40%; */
    width: 15rem;
    /* align-items: center; */
  }
  img {
    /* padding: 0 20px; */
  }
  ul {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  li:nth-of-type(1) {
    color: ${Maincolor.black};
    font-size: 1.7rem;
    font-weight: 800;
  }
  li:nth-of-type(2) {
    color: ${Maincolor.grayBold};
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  li:nth-of-type(3) {
    color: ${Maincolor.redBold};
    font-size: 2rem;
    font-weight: 800;
  }
  li:nth-of-type(4) {
    font-size: 1.7rem;
    margin-bottom: 5px;
  }
  li:nth-of-type(5) {
    font-size: 1.7rem;
  }
`;

export const DetailButtonOk = styled.button`
  display: block;
  background: ${Maincolor.redBold};
  color: ${Maincolor.white};
  border: 0.05rem solid ${Maincolor.redBold};
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
  /* margin-bottom: 20px; */
  transition: 0.2s ease-in-out;
  &:disabled {
    background-color: ${Maincolor.grayMedium};
    color: ${Maincolor.white};
    border-color: ${Maincolor.grayMedium};
    cursor: not-allowed;
  }
`;

export const DetailTotalPrice = styled.div`
  background: ${Maincolor.beige};
  padding: ${WidthPd.padding};
  color: ${Maincolor.black};
  padding-top: 2rem;
  padding-bottom: 2rem;
  p {
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    /* padding: 10px; */
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
