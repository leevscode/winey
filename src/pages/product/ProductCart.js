import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import {
  ProudctTotalItem,
  ProductCartNone,
  ProductCartIn,
  ProductCartInfo,
  CartDetail,
  CartInfoDes,
  GoodsEa,
  CartTotalPrice,
  CartTotalPriceOne,
  CartDetailImg,
  CartDetaiClose,
} from "../../style/ProductCartStyle";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../../reducers/userSlice";
import { fetchCartData, addToCart, removeFromCart, changeQuantity } from "../../../src/api/patchcart"

const ProductCart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

//  userId: 유저PK값,
// quantity: 수량,
// nmKor: 한글 이름,
// nmEng: 영어 이름,
// price: 가격,
// salePrice: 할인가격,
// pic: 사진,

  useEffect(() => {
    // 컴포넌트가 마운트될 때 API 요청 보내기
    fetchCartData()
      .then((cartData) => {
        // 받아온 데이터를 처리할 수 있습니다.
        console.log("받아온 카트 데이터:", cartData);
      })
      .catch((error) => {
        console.error("API 요청 중 오류 발생:", error);
      });
  }, []);

  // 더미데이터 추가 버튼
  // const addItemToCart = () => {
  //   const newItem = {
  //     userid: cartItems.length + 1,
  //     nmKor: "제프 까렐, 울락 헤꼴뜨",
  //     nmEng: "Ultime Recolte By Jeff Carrel",
  //     price: "32,900원",
  //     quantity: 1,
  //     pic: <img src="https://via.placeholder.com/200x200" alt="샘플이미지" />,
  //   };
  //   dispatch(addItem(newItem));
  // };

  // 상품을 장바구니에서 제거하는 함수
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
      {cartItems.length === 0 ? (
        <ProductCartNone>
          <div>
            <i>
              <FontAwesomeIcon icon={faExclamation} />
            </i>
          </div>
          장바구니에 담긴 상품이 없습니다.
        </ProductCartNone>
      ) : (
        <ProductCartIn>
          <ProudctTotalItem>
            장바구니에 총 {cartItems.length}개의 상품이 있습니다.
          </ProudctTotalItem>
          <ul>
            {cartItems.map(item => (
              <ProductCartInfo key={item.id}>
                <CartDetailImg>{item.pic}</CartDetailImg>
                <CartDetail>
                  <p>{item.nmKor}</p>
                  <CartInfoDes>{item.nmEng}</CartInfoDes>
                  <span>{item.price}</span>
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
        </ProductCartIn>
      )}
      <ButtonCancel onClick={() => navigate("/main")}>
        메인으로 돌아가기
      </ButtonCancel>
    </>
  );
};

export default ProductCart;
