/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/
import styled from "@emotion/styled";

export const OrderCancelModal = styled.div`
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
  z-index: 9999;
`;

export const OrderCancelContent = styled.div`
  font-size: 1.8rem;
  background-color: white;
  padding: 50px;
  border-radius: 5px;
  h1 {
    color: #aaaaaa;
    float: right;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;
