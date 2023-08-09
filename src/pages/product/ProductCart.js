import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import {
  ProudctTotalItem,
  ProductCartNone,
  CartDetail,
  GoodsEa,
  CartTotalPrice,
  CartTotalPriceOne,
  CartDetaiClose,
  CartDetailWrap,
  ProductCartInfo,
  CartnmEng,
  Cartnmkor,
  Cratprice,
} from "../../style/ProductCartStyle";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { increaseQuantity, decreaseQuantity } from "../../reducers/cartSlice";
import { fetchCartData, removeCarts } from "../../../src/api/patchcart";
import { useState } from "react";

const ProductCart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [CartData, setCartData] = useState([]);

  const filledCartData = async () => {
    try {
      const data = await fetchCartData();
      setCartData(data);
      console.log("장바구니 리스트 출력", data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    filledCartData();
  }, []);

  const removeItemCart = async removeCart => {
    alert(removeCart);
    try {
      const data = await removeCarts(removeCart);
      filledCartData(data);
      console.log("장바구니 삭제 되야 함", data);
    } catch (error) {
      console.log(error);
    }
  };

  // 상품의 수량을 증가시키는 함수
  const increaseQuantityHandler = id => {
    dispatch(increaseQuantity(id));
  };

  // 상품의 수량을 감소시키는 함수
  const decreaseQuantityHandler = id => {
    dispatch(decreaseQuantity(id));
  };

  const calculateTotalPrice = () => {
    return CartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <>
      {CartData.length === 0 ? (
        <ProductCartNone>
          <div>
            <i>
              <FontAwesomeIcon icon={faExclamation} />
            </i>
          </div>
          장바구니에 담긴 상품이 없습니다.
        </ProductCartNone>
      ) : (
        <div>
          <ProudctTotalItem>
            장바구니에 총 {CartData.length}개의 상품이 있습니다.
          </ProudctTotalItem>
          <ul>
            {CartData.map((item, index) => (
              <ProductCartInfo key={index}>
                <CartDetailWrap>
                  <img src={`/img/${item.pic}`} alt="와인사진" />
                </CartDetailWrap>
                <CartDetail>
                  <Cartnmkor>{item.nmKor}</Cartnmkor>
                  <CartnmEng>{item.nmEng}</CartnmEng>
                  <Cratprice>{item.price.toLocaleString()}원</Cratprice>
                  <GoodsEa>
                    <button onClick={() => decreaseQuantityHandler(item.id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantityHandler(item.id)}>
                      +
                    </button>
                  </GoodsEa>
                </CartDetail>
                <CartDetaiClose onClick={() => removeItemCart(item.cartId)}>
                  X
                </CartDetaiClose>
              </ProductCartInfo>
            ))}
          </ul>
          <CartTotalPrice>
            <li>최종결제금액</li>
            <CartTotalPriceOne>
              <span>{calculateTotalPrice().toLocaleString()}원</span>
            </CartTotalPriceOne>
          </CartTotalPrice>
          <ButtonOk onClick={() => navigate("/productsell")}>구매하기</ButtonOk>
        </div>
      )}
      <ButtonCancel onClick={() => navigate("/main")}>
        메인으로 돌아가기
      </ButtonCancel>
    </>
  );
};

export default ProductCart;
