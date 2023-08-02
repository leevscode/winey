/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode
    깃허브 : https://github.com/leevscode
*/

import styled from "@emotion/styled";

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

export const OrdercancelBtn = styled.div`
  display: flex;
  margin: 0 6px;
  justify-content: flex-end;
  button {
    font-size: 1.5rem;
  }
`;

export const NotOrder = styled.div`
  text-align: center;
  font-size: 2rem;
`;

export const ModalColse = styled.i`
  display: flex;
  justify-content: flex-end;
  font-size: 2.8rem;
`;

export const SellListButton = styled.div`
  display: flex;
  font-size: 1.6rem;
  justify-content: space-around;
  gap: 10px;
  padding: 20px;
`;

export const PickUpButton = styled.button`
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
  &:disabled {
    background-color: #bdc3c7;
    color: #7f8c8d;
    border: #bdc3c7;
    cursor: not-allowed;
  }
`;

export const SellListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 10px;
  margin: 6px;
`;

export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: #fff;
  padding: 50px 25px;
  border-radius: 8px;
  text-align: center;
  h1 {
    font-size: 2.7rem;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;
export const ReviewIcon = styled.i`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 3.5rem;
  margin-bottom: 15px;
`;

export const ReviewModalbox = styled.ul`
  display: flex;
  font-size: 1.7rem;
  align-items: center;
  justify-content: space-around;
  button {
    /* padding: 30px; */
    width: 27%;
    height: 120px;
    background: #fcf8f1;
    border-radius: 20px;
    &:hover {
      color: #7c1d34;
      transform: scale(1.3);
      cursor: pointer;
    }
    /* &:first-of-type {
      padding: 30px 40px;
    }
    &:last-of-type {
      padding: 30px 30px;
    } */
  }
`;

export const SellListModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  visibility: ${({ modalVisible }) => (modalVisible ? "visible" : "hidden")};
  opacity: ${({ modalVisible }) => (modalVisible ? 1 : 0)};
  transition:
    visibility 0.3s,
    opacity 0.3s;
`;
