import styled from "@emotion/styled";

export const WidthPd = {
  padding: "0 2%",
  paddingTopSmall: "1.5rem",
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
    color: #3c2323;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  span {
    color: #837575;
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

export const SellListDetailinfo = styled.div`
  padding: 20px;
  div {
    margin-bottom: 30px;
    display: flex;
  }
  img {
    padding: 0 20px;
  }
  ul {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  li:nth-of-type(1) {
    color: #3c2323;
    font-size: 2.3rem;
    font-weight: bold;
  }
  li:nth-of-type(2) {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }
  li:nth-of-type(3) {
    color: #7c1d34;
    font-size: 2.7rem;
    font-weight: bold;
    margin-bottom: 20px;
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
  transition: 0.2s ease-in-out;
  &:hover {
    background: ${Maincolor.redDeep};
  }
`;

export const DetailTotalPrice = styled.div`
  background: ${Maincolor.beige};
  padding: ${WidthPd.padding};
  color: ${Maincolor.black};
  & > p {
    font-size: 1.7rem;
    padding: 10px;
  }
`;
