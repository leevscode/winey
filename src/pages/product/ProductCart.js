/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/
import React, { useEffect, useState } from "react";
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
  ButtonDiv,
  CartMax,
} from "../../style/ProductCartStyle";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamation,
  faMinus,
  faPlus,
  faX,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  cartLengthData,
  fetchCartData,
  removeCarts,
} from "../../../src/api/patchcart";
import { useDispatch } from "react-redux";
import NoImage from "../../assets/no_image.jpg";
import Modal from "antd/es/modal/Modal";
const ProductCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [CartData, setCartData] = useState([]);
  // 변하는 값(수량,총합) 담는 state
  const [totalPrice, setTotalPrice] = useState(0);

  const filledCartData = async () => {
    try {
      const data = await fetchCartData();
      setCartData(data);
      // console.log("장바구니 리스트 출력", data);
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    filledCartData();
  }, []);

  // 장바구니 모달
  const removeItemCart = removeCart => {
    Modal.confirm({
      okText: "예",
      cancelText: "아니오",
      wrapClassName: "info-modal-wrap notice-modal",
      maskClosable: true,
      // title: "장바구니 삭제 확인",
      content: (
        <ul>
          <li>
            장바구니에서
            <br />
            상품을 삭제하시겠습니까?
          </li>
        </ul>
      ),
      async onOk() {
        const data = await removeCarts(removeCart);
        filledCartData(data);
        cartLengthData(dispatch);
      },
      onCancel() {
        // console.log("Cancel");
      },
    });
  };

  const calcTotalSum = () => {
    let itemTotal = 0;
    CartData.map((item, index) => {
      itemTotal += item.price * item.quantity;
    });
    return itemTotal;
  };

  const increaseItemQuantity = async cartId => {
    const arr = CartData.map(item => {
      if (item.cartId === cartId) {
        if (item.quantity < 5) {
          item.quantity += 1;
        }
      }
      return item;
    });
    setCartData(arr);
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
  };

  const buyGood = async () => {
    // console.log("장바구니 내역을 서버로 전송함");

    navigate("/productsellcart", {
      state: {
        CartData,
        totalPrice,
      },
    });
  };

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  // 토탈값 바뀔때마다 갱신되는 useEffect
  useEffect(() => {
    setTotalPrice(calcTotalSum);
  }, [calcTotalSum]);

  // console.log("CartData", CartData);
  // console.log("totalPrice", totalPrice);
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
            {CartData &&
              CartData.map(item => (
                <ProductCartInfo key={item.cartId} onError={onImgError}>
                  <CartDetailWrap>
                    <img src={`/img/${item.pic}`} alt="와인사진" />
                  </CartDetailWrap>
                  <CartDetail>
                    <Cartnmkor>{item.nmKor}</Cartnmkor>
                    <CartnmEng>{item.nmEng}</CartnmEng>
                    <Cratprice>{item.price.toLocaleString()}원</Cratprice>
                    <GoodsEa>
                      <button onClick={() => decreaseItemQuantity(item.cartId)}>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseItemQuantity(item.cartId)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </GoodsEa>
                    {item.quantity == 5 ? (
                      <CartMax>최대구매수량은 5개입니다</CartMax>
                    ) : (
                      <CartMax></CartMax>
                    )}
                  </CartDetail>
                  <CartDetaiClose onClick={() => removeItemCart(item.cartId)}>
                    <FontAwesomeIcon icon={faX} />
                  </CartDetaiClose>
                </ProductCartInfo>
              ))}
          </ul>
          <CartTotalPrice>
            <li>최종결제금액</li>
            <CartTotalPriceOne>
              <span>{calcTotalSum().toLocaleString()}원</span>
            </CartTotalPriceOne>
          </CartTotalPrice>
          <ButtonDiv>
            <ButtonOk onClick={buyGood}>결제하기</ButtonOk>
          </ButtonDiv>
        </div>
      )}
      <ButtonDiv>
        <ButtonCancel onClick={() => navigate("/main")}>
          메인으로 돌아가기
        </ButtonCancel>
      </ButtonDiv>
    </>
  );
};

export default ProductCart;
