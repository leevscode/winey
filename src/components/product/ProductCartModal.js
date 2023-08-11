import React from "react";
import { CartCompleteModal } from "../../style/GlobalComponents";
import { ButtonOk } from "../../style/GlobalStyle";

const ProductCartModal = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <CartCompleteModal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <p>
        <i>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon_cart_2.svg`}
            alt="장바구니"
          />
        </i>
        상품을 장바구니에 담았습니다.
      </p>
      <ButtonOk>장바구니 바로가기</ButtonOk>
    </CartCompleteModal>
  );
};

export default ProductCartModal;
