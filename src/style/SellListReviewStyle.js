import styled from "@emotion/styled";

// ReviewModal 컴퍼넌트
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
    width: 27%;
    height: 120px;
    background: #fcf8f1;
    border-radius: 20px;
    &:hover {
      color: #7c1d34;
      cursor: pointer;
      border: 2px solid #7c1d34;
    }
    &.selected {
      border: 2px solid #7c1d34;
      color: #7c1d34;
    }
    &:focus {
      outline: none;
    }
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
  visibility: ${({ reviewReset }) => (reviewReset ? "visible" : "hidden")};
  opacity: ${({ reviewReset }) => (reviewReset ? 1 : 0)};
  transition:
    visibility 0.3s,
    opacity 0.3s;
`;
