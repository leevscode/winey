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
// import { increaseQuantity, decreaseQuantity } from "../../reducers/cartSlice";
import {
  changeQuantity,
  fetchCartData,
  removeCarts,
} from "../../../src/api/patchcart";
import { useState } from "react";

const ProductCart = () => {
  const cartItems = useSelector(state => state.cart);
  // const dispatch = useDispatch();
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

  const calculateTotalPrice = () => {
    return CartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const increaseItemQuantity = async cartId => {
    const arr = CartData.map(item => {
      if (item.cartId === cartId) {
        item.quantity += 1;
      }
      return item;
    });
    setCartData(arr);
    // try {
    //   const updatedItem = await changeQuantity(
    //     cartId,
    //     CartData.find(item => item.cartId === cartId).quantity + 1,
    //   );
    //   // 장바구니 수량 +
    //   setCartData(prevCartData =>
    //     prevCartData.map(item => (item.cartId === cartId ? updatedItem : item)),
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const decreaseItemQuantity = async cartId => {
    const arr = CartData.map(item => {
      if (item.cartId === cartId) {
        item.quantity -= 1;
        if (item.quantity < 1) {
          item.quantity = 1;
        }
      }
      return item;
    });
    setCartData(arr);
    // try {
    //   const updatedItem = await changeQuantity(
    //     cartId,
    //     CartData.find(item => item.cartId === cartId).quantity - 1,
    //   );
    //   // 장바구니 수량 -
    //   setCartData(prevCartData =>
    //     prevCartData.map(item => (item.cartId === cartId ? updatedItem : item)),
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const buyGood = async () => {
    console.log("장바구니 내역을 서버로 전송함");
    // awati
    // awati
    // awati
    // awati
    // awati
    // awati
    navigate("/productsell");
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
            {CartData.map(item => (
              <ProductCartInfo key={item.cartId}>
                <CartDetailWrap>
                  <img src={`/img/${item.pic}`} alt="와인사진" />
                </CartDetailWrap>
                <CartDetail>
                  <Cartnmkor>{item.nmKor}</Cartnmkor>
                  <CartnmEng>{item.nmEng}</CartnmEng>
                  <Cratprice>{item.price.toLocaleString()}원</Cratprice>
                  <GoodsEa>
                    <button onClick={() => decreaseItemQuantity(item.cartId)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseItemQuantity(item.cartId)}>
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
          <ButtonOk onClick={buyGood}>결제하기</ButtonOk>
        </div>
      )}
      <ButtonCancel onClick={() => navigate("/main")}>
        메인으로 돌아가기
      </ButtonCancel>
    </>
  );
};

export default ProductCart;
