import styled from "@emotion/styled";

export const OrderCancelModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const OrderCancelContent = styled.div`
  font-size: 1.8rem;
  background-color: white;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const OrderCancelText = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
`;
