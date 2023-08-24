/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/
import styled from "@emotion/styled";
import { Maincolor, WidthPd } from "./GlobalStyle";

// ReviewModal 컴퍼넌트
export const ModalColse = styled.button`
  position: absolute;
  top: 18px;
  right: 20px;
  font-size: 2rem;
  color: #8c8c8c;
  width: 20px;
  border-radius: 5px;
  &:hover {
    background: #f0f0f0;
  }
`;

export const SellListButton = styled.div`
  display: flex;
  font-size: 1.6rem;
  justify-content: space-around;
  gap: 10px;
  padding: ${WidthPd.padding};
  margin-bottom: 2rem;
`;

export const ModalText = styled.div`
  position: absolute;
  top: 18vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  max-width: 440px;
  width: 95%;
  background-color: ${Maincolor.white};
  padding: 50px 15px 40px;
  border-radius: 8px;
  text-align: center;
  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 20px 0 10px;
  }
  p {
    font-size: 1.6rem;
    color: ${Maincolor.grayBold};
    margin-bottom: 30px;
  }
`;
export const ReviewIcon = styled.i`
  display: block;
  font-size: 2.3em;
  margin-bottom: 10px;
`;

export const ReviewModalbox = styled.ul`
  display: flex;
  font-size: 1.7rem;
  align-items: center;
  justify-content: space-around;
  gap: 0 10px;
  margin-bottom: 40px;
  li {
    width: calc(100% / 3);
  }
  button {
    display: block;
    width: 100%;
    background: ${Maincolor.beige};
    border-radius: 10px;
    padding: 35px 10px;
    font-size: 1.4rem;
    color: ${Maincolor.black};
    border: 2px solid ${Maincolor.beige};
    &:hover {
      color: ${Maincolor.redDeep};
      cursor: pointer;
      border-color: ${Maincolor.redDeep};
    }
    &.selected {
      border: 2px solid ${Maincolor.redDeep};
      color: ${Maincolor.redDeep};
    }
    &:focus {
      outline: none;
    }
  }
`;
export const ReviewModalButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5px;
`;

export const SellListModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  visibility: ${({ reviewReset }) => (reviewReset ? "visible" : "hidden")};
  opacity: ${({ reviewReset }) => (reviewReset ? 1 : 0)};
  transition:
    visibility 0.3s,
    opacity 0.3s;
`;
