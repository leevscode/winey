import React, { useEffect, useState } from "react";
import { PurchaseListWrap, TotalPrice } from "../../style/ProductSellStyle";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoImage from "../../assets/no_image.jpg";

const PurchaseList = ({
  totalPrice,
  setTotalPrice,
  productCollect,
  setProductCollect,
}) => {
  const 임시데이터 = {
    TempList: [
      {
        productPK: "22",
        productImg: "",
        productKorName: "프란시스 포드 코폴라, 엘레노어",
        productEngName: "Francis Ford Coppola, Eleanor",
        sellPrice: 32600,
        number: 1,
      },
      {
        productPK: "23",
        productImg: "https://via.placeholder.com/190x350/ffeeee",
        productKorName: "비냐 콘차이토로 푸두 카베르네 소비뇽 쉬라즈",
        productEngName: "VINA CONCHA Y TORO PUDU CABERNET SAUVIGNON SHIRAZ",
        sellPrice: 72000,
        number: 3,
      },
      {
        productPK: "24",
        productImg: "https://via.placeholder.com/350x350/ffffee",
        productKorName: "스가르지 루이지, 레티자 화이트",
        productEngName: "Sgarzi Luigi, Letizia White",
        sellPrice: 14500,
        number: 2,
      },
    ],
  };

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  // 아이템 갯수 state
  const numberArray = 임시데이터.TempList.map(item => item.number);
  const [itemCount, setItemCount] = useState(numberArray);

  // 수량 변경 핸들러
  // 수량 마이너스
  const handleCountMinus = option => {
    setItemCount(prevCounts => {
      return prevCounts.map((count, index) => {
        if (임시데이터.TempList[index].productPK === option.productPK) {
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
        if (임시데이터.TempList[index].productPK === option.productPK) {
          // 값이 5보다 크면 5으로 제한
          return Math.min(parseInt(count) + 1, 5);
        } else {
          return count;
        }
      });
    });
  };

  // 합계 계산
  const calcTotalSum = () => {
    let itemtotal = 0;
    임시데이터.TempList.forEach((option, index) => {
      itemtotal += parseInt(option.sellPrice) * parseInt(itemCount[index]);
    });
    return itemtotal;
  };

  useEffect(() => {
    setTotalPrice(calcTotalSum);
    console.log("totalPrice", totalPrice);
  }, [calcTotalSum]);

  useEffect(() => {
    // itemCount가 변경될 때마다 productCollect를 업데이트
    const updatedProductCollect = 임시데이터.TempList.map((option, index) => {
      return {
        ...option,
        number: itemCount[index],
      };
    });

    // setProductCollect(prevState => ({
    //   // ...prevState,
    //   ...productCollect,
    //   updatedProductCollect,
    // }));
    setProductCollect(updatedProductCollect)
    console.log("productCollect", productCollect);
  }, [itemCount]);
  return (
    <div>
      <PurchaseListWrap>
        <p>선택한 상품</p>
        {임시데이터.TempList.map((option, index) => (
          <div key={option.productPK} className="WrapFlex">
            <div className="item-photo">
              <img
                src={option.productImg}
                alt={option.productEngName}
                onError={onImgError}
              />
            </div>
            <div className="item-desc">
              <strong>{option.productKorName}</strong>
              <span>{option.productEngName}</span>
              <p>{parseInt(option.sellPrice).toLocaleString()} 원</p>
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

export default PurchaseList;
