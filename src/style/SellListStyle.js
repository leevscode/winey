import styled from "@emotion/styled";

export const SellListButton = styled.div`
  display: flex;
  font-size: 1.4rem;
  justify-content: space-around;
  gap: 10px;
  padding: 20px;
`;

export const SellListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 6px;
`;

export const SellListModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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

export const ModalBackdrop = styled.div``;

export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 200px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;
