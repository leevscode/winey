/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/
import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";

export const ProductCartNone = styled.div`
  padding: ${WidthPd.padding};
  font-size: 1.5rem;
  padding: 80px;
  text-align: center;
  color: #e7e4e4;
  & i > svg {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding: 0.5rem;
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 1rem;
    background: ${opacity.grayLight};
    color: ${Maincolor.white};
  }
`;

export const ProudctTotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${WidthPd.padding};
  font-size: 1.5rem;
  color: #837575;
  margin-bottom: 10px;
  i {
    font-size: 1.8rem;
    color: #7c1d34;
    position: absolute;
    margin-top: -5px;
    margin-left: 4px;

  }
  img {
    position: relative;
    width: 22px;
    height: auto;
    margin-top: -5px;
  }
  button:hover {
    transform: rotate(130deg);
    transition: transform 0.7s ease;
  }
`;

export const ProductCartInfo = styled.div`
  padding: ${WidthPd.padding};
  padding: 2rem 1rem;
  border-bottom: 1px solid ${opacity.white};
  font-size: 2rem;
  display: grid;
  text-align: center;
  grid-template-columns: 1fr 2.5fr 30px;
  button {
    font-size: 2.2rem;
  }
`;

export const CartDetailWrap = styled.div`
  width: 15rem;
  height: 15rem;
  position: relative;
  border: 0.05rem solid ${opacity.grayLight};
  overflow: hidden;
  isolation: isolate;
  img {
    padding: 1rem;
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
  padding: 1rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CartDetaiClose = styled.button`
  position: relative;
  & > svg {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    padding: 1rem;
    color: ${opacity.gray};
  }
`;

export const Cartnmkor = styled.p`
  font-size: 1.7rem;
  font-weight: 800;
  line-height: 1.8rem;
  color: #3c2323;
`;

export const CartnmEng = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 2rem;
  margin-bottom: 2rem;
  color: #837575;
`;

export const Cratprice = styled.p`
  font-size: 1.7rem;
  font-weight: 900;
  line-height: 2.5rem;
  color: ${Maincolor.redBold};
  margin-bottom: 0.5rem;
`;

export const GoodsEa = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  span {
    align-items: center;
    display: inline-block;
    width: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${Maincolor.black};
    text-align: center;
    padding: 0.5rem;
    margin: 0 1rem;
  }
  button {
    // + - 아이콘
    & > svg {
      font-size: 1.5rem;
      border: 2px solid ${opacity.white};
      padding: 0.5rem;
      cursor: pointer;
    }
  }
`;

export const CartMax = styled.p`
  height: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1rem;
  color: red;
  margin: 0.3rem 0 0 0;
`;

export const CartTotalPrice = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  margin: 3rem 0;
  color: ${Maincolor.black};
  font-size: 1.5rem;
  background: #fcf8f1;
  span {
    font-size: 2rem;
    font-weight: bold;
    color: #7c1d34;
  }
`;

export const CartTotalPriceOne = styled.li`
  &:last-of-type {
    color: #7c1d34;
  }
`;

export const ButtonDiv = styled.div`
  padding: ${WidthPd.padding};
  margin-top: 1.5rem;
`;
