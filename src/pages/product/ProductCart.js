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
  CartRemove,
} from "../../style/ProductCartStyle";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamation,
  faMinus,
  faPlus,
  faX,
  faWineBottle,
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
  const [cartData, setCartData] = useState([]);
  // 변하는 값(수량,총합) 담는 state
  const [totalPrice, setTotalPrice] = useState(0);

  // 장바구니 출력 get
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
    cartData?.map(item => {
      itemTotal += item.price * item.quantity;
    });
    return itemTotal;
  };

  // 장바구니 수량 + , 최대 5개까지만
  const removeQuantity = async cartId => {
    const arr = cartData?.map(item => {
      if (item.cartId === cartId) {
        if (item.quantity < 5) {
          item.quantity += 1;
        }
      }
      return item;
    });
    setCartData(arr);
  };

  // 장바구니 수량 -
  const addQuantity = async cartId => {
    const arr = cartData?.map(item => {
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

  // 장바구니에서 결제
  const buyGood = async () => {
    // 카트에 있는 상품 ID 중복 확인
    // 장바구니 버그 방지용 코드
    const productIds = new Set();
    let hasDuplicate = false;
    for (const item of cartData) {
      if (productIds.has(item.productId)) {
        hasDuplicate = true;
        break;
      }
      productIds.add(item.productId);
    }

    if (hasDuplicate) {
      // 중복 상품이 있는 경우 모달 표시
      Modal.warning({
        wrapClassName: "info-modal-wrap notice-modal",
        maskClosable: true,
        content: (
          <ul>
            <li>장바구니에 중복된 상품이 있습니다.</li>
          </ul>
        ),
      });
      // 중복된 상품이 있으면 결제 페이지로 이동하지 않도록 중단
      return;
    }

    // 결제 페이지로 이동
    navigate("/productsellcart", {
      state: {
        cartData,
        totalPrice,
      },
    });
  };

  // 장바구니 담긴 상품 모두 지우기
  const removeAllItems = async () => {
    Modal.confirm({
      okText: "예",
      cancelText: "아니오",
      wrapClassName: "info-modal-wrap notice-modal",
      maskClosable: true,
      content: (
        <ul>
          <li>
            장바구니에 담긴 모든 상품을 <br />
            삭제 하시겠습니까?
          </li>
        </ul>
      ),
      async onOk() {
        for (const item of cartData) {
          await removeCarts(item.cartId);
        }
        // 장바구니에 담긴 모든 cartId 삭제
        setCartData([]);
        console.log(cartData, "장바구니 삭제 성공");
        // 장바구니 데이터 다시 불러 오기
        cartLengthData(dispatch);
      },
      onCancel() {
        "";
      },
    });
  };

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  // 토탈값 바뀔때마다 갱신되는 useEffect (calcTotalSum)
  useEffect(() => {
    setTotalPrice(calcTotalSum);
  }, [calcTotalSum]);

  // console.log("CartData", CartData);
  // console.log("totalPrice", totalPrice);

  return (
    <>
      {cartData?.length === 0 ? (
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
            장바구니에 총 {cartData?.length}개의 상품이 있습니다.
            <button onClick={removeAllItems}>
              <i>
                <FontAwesomeIcon icon={faWineBottle} />
              </i>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon_cart_1.svg`}
                alt="장바구니"
              />
            </button>
          </ProudctTotalItem>
          <ul>
            {cartData &&
              cartData?.map(item => (
                <ProductCartInfo key={item.cartId} onError={onImgError}>
                  <CartDetailWrap>
                    <Link to={`/productdetail/${item.productId}`}>
                      <img src={`/img/${item.pic}`} alt="와인사진" />
                    </Link>
                  </CartDetailWrap>
                  <CartDetail>
                    <Cartnmkor>
                      <Link to={`/productdetail/${item.productId}`}>
                        {item.nmKor}
                      </Link>
                    </Cartnmkor>
                    <CartnmEng>{item.nmEng}</CartnmEng>
                    <Cratprice>{item.price.toLocaleString()}원</Cratprice>
                    <GoodsEa>
                      <button onClick={() => addQuantity(item.cartId)}>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => removeQuantity(item.cartId)}>
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
