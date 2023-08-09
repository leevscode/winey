/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode
    깃허브 : https://github.com/leevscode
*/

export const opacity = {
  wine: "rgba(124, 29, 52, 0.65)",
  grayDeep: "rgba(60, 35, 35, 0.5)",
  gray: "rgba(60, 35, 35, 0.3)",
  grayLight: "rgba(60, 35, 35, 0.1)",
  white: "rgba(60, 35, 35, 0.07)",
  whiteB: "rgba(255, 255, 255, 0.3)",
  whiteC: "rgba(60, 35, 35, 0.03)",
};

import styled from "@emotion/styled";

export const ProductCartNone = styled.div`
  font-size: 2rem;
  padding: 80px;
  text-align: center;
  color: #e7e4e4;
`;

export const ProudctTotalItem = styled.div`
  font-size: 2rem;
  color: #837575;
  margin-bottom: 10px;
`;

export const ProductCartIn = styled.div``;

export const ProductCartInfo = styled.div`
  font-size: 2rem;
  display: grid;
  text-align: center;
  grid-template-columns: 1fr 2.5fr 30px;
  button {
    font-size: 2.2rem;
    margin: 10px;
  }
`;

export const CartDetailWrap = styled.div`
  position: relative;

  padding-top: 135%;
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
  }
`;

export const CartDetail = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CartDetaiClose = styled.div``;

export const CartInfoDes = styled.p`
  font-size: 1.2rem;
  margin-bottom: 90px;
`;

export const GoodsEa = styled.div``;

export const CartTotalPrice = styled.ul`
  display: flex;
  padding: 20px;
  margin: 20px 0;
  justify-content: space-between;
  color: black;
  font-size: 2rem;
  background: #fcf8f1;
  span {
    font-size: 1.5rem;
  }
`;

export const CartTotalPriceOne = styled.li`
  &:last-of-type {
    color: #7c1d34;
  }
`;
