import styled from "@emotion/styled";


export const ProductCompleteMain = styled.div`

`

export const ProductCompleteText = styled.div`
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

export const ProductCompleteinfo = styled.div`
  display: flex;
  img {
    padding: 0 20px;
  }
  ul {
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

export const ProductCompleteBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;
