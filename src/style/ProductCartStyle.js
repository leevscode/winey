/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode
    깃허브 : https://github.com/leevscode
*/
import styled from "@emotion/styled";

export const opacity = {
  wine: "rgba(124, 29, 52, 0.65)",
  grayDeep: "rgba(60, 35, 35, 0.5)",
  gray: "rgba(60, 35, 35, 0.3)",
  grayLight: "rgba(60, 35, 35, 0.1)",
  white: "rgba(60, 35, 35, 0.07)",
  whiteB: "rgba(255, 255, 255, 0.3)",
  whiteC: "rgba(60, 35, 35, 0.03)",
};

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
  margin-bottom: 15px;
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
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  p {
    font-size: 2.5rem;
  }
`;

export const CartDetaiClose = styled.button`
  display: inline-flex;
`;

export const Cartnmkor = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  color: #3c2323;
`;

export const CartnmEng = styled.p`
  font-size: 1.4rem !important;
  margin-bottom: 40px;
  color: #837575;
`;

export const Cratprice = styled.p`
  font-weight: bold;
  color: #7c1d34;
`;

export const GoodsEa = styled.div`
  margin-top: 10px;
  span {
    border: 1px solid;
    padding: 0 20px;
  }
  button {
    border: 1px solid;
    width: 30px;
  }
`;

export const CartTotalPrice = styled.ul`
  display: flex;
  padding: 20px;
  margin: 20px 0;
  justify-content: space-between;
  color: black;
  font-size: 2rem;
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
