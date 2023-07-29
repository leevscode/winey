import React, { useState } from "react";
import { PurchaseListWrap, TotalPrice } from "../../style/ProductSellStyle";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PurchaseList = () => {
  const 임시데이터 = {
    TempList: [
      {
        productPK: "22",
        ProductImg: "https://via.placeholder.com/150x140/ffffff",
        productKorName: "프란시스 포드 코폴라, 엘레노어",
        productEngName: "Francis Ford Coppola, Eleanor",
        sellPrice: "32,600",
        number: "1",
      },
      {
        productPK: "23",
        ProductImg: "https://via.placeholder.com/150x140/ffffff",
        productKorName: "비냐 콘차이토로 푸두 카베르네 소비뇽 쉬라즈",
        productEngName: "VINA CONCHA Y TORO PUDU CABERNET SAUVIGNON SHIRAZ",
        sellPrice: "72,000",
        number: "3",
      },
    ],
  };

  // 아이템 갯수 state
  const parseIntNum = parseInt(임시데이터.TempList[0].number);
  console.log("parseIntNum", parseIntNum);
  const [itemCount, setItemCount] = useState(parseIntNum);
  const [calcTotalPrice, setCalcTotalPrice] = useState();

  // 수량 이벤트 핸들러
  const [purchaseItem, setPurchaseItem] = useState(
    임시데이터.TempList.map(item => ({ ...item })),
  );

  const handleCountMinus = productPK => {
    setPurchaseItem(prev => {
      return prev.map(item => {
        if (item.productPK === productPK) {
          const newCount = parseInt(item.number) - 1;
          return { ...item, number: newCount };
        }
        return item;
      });
    });
  };

  const handleCountPlus = productPK => {
    setPurchaseItem(prev => {
      return prev.map(item => {
        if (item.productPK === productPK) {
          const newCount = parseInt(item.number) + 1;
          return { ...item, number: String(newCount) };
        }
        return item;
      });
    });
  };

  return (
    <div>
      <PurchaseListWrap>
        <p>선택한 상품</p>
        {임시데이터.TempList.map(option => (
          <div key={option.productPK} className="WrapFlex">
            <div className="item-photo">
              <img src={option.ProductImg} />
            </div>
            <div className="item-desc">
              <strong>{option.productKorName}</strong>
              <span>{option.productEngName}</span>
              <p>{option.sellPrice} 원</p>
              <div>
                <FontAwesomeIcon
                  icon={faMinus}
                  onClick={() => handleCountMinus(option.productPK)}
                />
                <p>{itemCount}</p>
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => handleCountPlus(option.productPK)}
                />
              </div>
            </div>
          </div>
        ))}
      </PurchaseListWrap>
      <TotalPrice>
        <div>
          <span>최종 결제금액</span>
          <strong> /&&/ 원</strong>
        </div>
      </TotalPrice>
    </div>
  );
};

export default PurchaseList;
