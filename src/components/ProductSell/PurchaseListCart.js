/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React, { useEffect, useState } from "react";
import { PurchaseListWrap, TotalPrice } from "../../style/ProductSellStyle";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoImage from "../../assets/no_image.jpg";
import { patchItemQuatt } from "../../api/purchasepatch";

const PurchaseListCart = ({
  productInfoArray,
  setTotalPrice,
  setEditProductCollect,
  editProductCollect,
}) => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  // 아이템 갯수 state
  const numberArray = productInfoArray.map(item => item.quantity);
  const [itemCount, setItemCount] = useState(numberArray);
  const [maxItem, setMaxItem] = useState("");

  // 수량 변경 핸들러
  // 수량 마이너스
  const handleCountMinus = option => {
    setItemCount(prevCounts => {
      return prevCounts.map((count, index) => {
        if (productInfoArray[index].productId === option.productId) {
          patchItemQuatt(productInfoArray[index]);

          setMaxItem("");

          // 값이 0보다 작으면 0으로 제한
          return Math.max(parseInt(count) - 1, 1);
        } else {
          return count;
        }
      });
    });
  };
  // 수량 플러스
  const handleCountPlus = option => {
    setItemCount(prevCounts => {
      return prevCounts.map((count, index) => {
        if (productInfoArray[index].productId === option.productId) {
          patchItemQuatt(productInfoArray[index]);

          if (count == 5) {
            setMaxItem("최대 구매수량은 5개입니다");
          }
          return Math.min(parseInt(count) + 1, 5);
          // 값이 5보다 크면 5으로 제한
        } else {
          return count;
        }
      });
    });
  };

  const calcTotalSum = () => {
    let itemtotal = 0;
    productInfoArray.forEach((option, index) => {
      itemtotal += parseInt(option.price) * parseInt(itemCount[index]);
    });
    return itemtotal;
  };

  useEffect(() => {
    setTotalPrice(calcTotalSum);
  }, [calcTotalSum, patchItemQuatt()]);

  useEffect(() => {
    const updatedProductCollect = productInfoArray.map((option, index) => ({
      cartId: option.cartId,
      productId: option.productId,
      pic: option.pic,
      salePrice: option.salePrice,
      price: option.price,
      nmKor: option.nmKor,
      nmEng: option.nmEng,
      quantity: itemCount[index],
    }));
    setEditProductCollect(updatedProductCollect);
  }, [itemCount]);

  return (
    <div>
      <PurchaseListWrap>
        <p>선택한 상품</p>
        {productInfoArray.map((option, index) => (
          <div key={option.productId} className="WrapFlex">
            <div className="item-photo">
              <img
                src={`/img/${option.pic}`}
                alt={option.nmKor}
                onError={onImgError}
              />
            </div>
            <div className="item-desc">
              <strong>{option.nmKor}</strong>
              <span>{option.nmEng}</span>
              <p>{parseInt(option.price).toLocaleString()}원</p>
              <div>
                <FontAwesomeIcon
                  icon={faMinus}
                  onClick={() => handleCountMinus(option)}
                />
                <p>{itemCount[index]}</p>
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => handleCountPlus(option)}
                />
              </div>
              {parseInt(itemCount[index]) === 5 ? (
                <p className="maxitem-notice">{maxItem}</p>
              ) : (
                <p className="maxitem-notice"> </p>
              )}
            </div>
          </div>
        ))}
      </PurchaseListWrap>
      <TotalPrice>
        <div>
          <span>최종 결제금액</span>
          <strong> {calcTotalSum().toLocaleString()} 원</strong>
        </div>
      </TotalPrice>
    </div>
  );
};

export default PurchaseListCart;
