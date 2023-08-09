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
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../../reducers/userSlice";
import { fetchCartData } from "../../../src/api/patchcart";
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

  const removeItemFromCart = id => {
    dispatch(removeItem(id));
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
    let totalPrice = 0;
    cartItems.forEach(item => {
      const priceWithoutWon = Number(
        item.price.replace("원", "").replace(",", ""),
      );
      totalPrice += priceWithoutWon * item.quantity;
    });
    return totalPrice;
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
                  <Cratprice>{item.price}원</Cratprice>
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
                <CartDetaiClose onClick={() => removeItemFromCart(item.id)}>
                  X
                </CartDetaiClose>
              </ProductCartInfo>
            ))}
          </ul>
          <CartTotalPrice>
            <li>최종결제금액</li>
            <CartTotalPriceOne>
              {calculateTotalPrice().toLocaleString()}
              <span>원</span>
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
