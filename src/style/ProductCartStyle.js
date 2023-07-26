/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode
    깃허브 : https://github.com/leevscode
*/

import styled from "@emotion/styled";

export const ProductCartNone = styled.div`
  font-size: 2rem;
  padding: 80px;
  text-align: center;
  color: #e7e4e4;
`;

export const ProductCartIn = styled.div``;

export const ProductCartInfo = styled.div`
  font-size: 2rem;
  display: grid;
  text-align: center;
  grid-template-columns: 1fr 2.5fr 30px;
  border: 1px solid;
  button {
    font-size: 2.2rem;
    margin: 10px;
  }
`;

export const GoodsEa = styled.div``;

export const CartTotalPrice = styled.ul`
  display: flex;
  padding: 20px;
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
