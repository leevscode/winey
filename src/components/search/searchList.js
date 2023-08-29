import { ConfigProvider, Select } from "antd";
import React from "react";
import { ContentsListItemWrap } from "../../style/GlobalComponents";

const SearchList = () => {
  // 더미데이터
  const dummyData = {
    wineList: [
      {
        productId: 30,
        nmKor: "레 프뢰즈 샤블리 그랑 크뤼",
        nmEng: "Les Preuses Chablis Grand Cru",
        price: 17200,
        pic: "wine/30/zu2U7U1QQoCVpHW7RoEfOQ_pb_x960.png",
        promotion: 1,
        beginner: 0,
        sale: 10,
        salePrice: 15400,
        saleYn: 1,
      },
      {
        productId: 27,
        nmKor: "알바레다 스포르자토 디 발텔리나",
        nmEng: "Albareda Sforzato di Valtellina",
        price: 16200,
        pic: "wine/27/i2nDqii1TeaD84F1HOB0mA_pb_x960.png",
        promotion: 0,
        beginner: 0,
        sale: 11,
        salePrice: 14700,
        saleYn: 1,
      },
      {
        productId: 24,
        nmKor: "컬멘 레저 바 리오하",
        nmEng: "Culmen Reserva Rioja",
        price: 15900,
        pic: "wine/24/eyzAu-aCSJuV69OKW4mgEw_pb_x960.png",
        promotion: 0,
        beginner: 0,
        sale: 11,
        salePrice: 14400,
        saleYn: 0,
      },
      {
        productId: 22,
        nmKor: "슈샤르조프버거 리슬링 스패틀레스",
        nmEng: "Scharzhofberger Riesling Spätlese",
        price: 15600,
        pic: "wine/22/NwRt7c2oQF6-mdBgs9gSLQ_pb_x960.png",
        promotion: 0,
        beginner: 0,
        sale: 10,
        salePrice: 14000,
        saleYn: 1,
      },
      {
        productId: 20,
        nmKor: "부르봉 바렐 에이지드 레드 블렌드",
        nmEng: "Bourbon Barrels Aged Red blend",
        price: 15000,
        pic: "wine/20/3IZf5taHRHimHaLvSkNABw_pb_x960.png",
        promotion: 0,
        beginner: 0,
        sale: 11,
        salePrice: 13600,
        saleYn: 1,
      },
      {
        productId: 16,
        nmKor: "콜리 델라 토스카나 센트랄 일 소렐 디 알레산드로",
        nmEng: "Colli Della Toscana Centrale Il Sole di Alessandro",
        price: 14600,
        pic: "wine/16/b6bdHil1SQO31xJ5KI32-g_pb_x960.png",
        promotion: 0,
        beginner: 0,
        sale: 10,
        salePrice: 13100,
        saleYn: 1,
      },
      {
        productId: 10,
        nmKor: "바디아 파시그나노 그란 셀레지온 치안티 클라시코",
        nmEng: "Badia a Passignano Gran Selezione Chianti Classico",
        price: 14000,
        pic: "wine/10/hxzM5LQaQEmv24npsUIXfQ_pb_x960.png",
        promotion: 0,
        beginner: 0,
        sale: 11,
        salePrice: 12700,
        saleYn: 0,
      },
      {
        productId: 8,
        nmKor: "테라스 레드 블렌드는",
        nmEng: "The Terraces Red Blend",
        price: 13800,
        pic: "wine/8/gMGknrylTxawxuMg4mYaQA_pb_x960.png",
        promotion: 0,
        beginner: 0,
        sale: 11,
        salePrice: 12500,
        saleYn: 0,
      },
      {
        productId: 3,
        nmKor: "프레스티지 브뤼 샴페인",
        nmEng: "Prestige Brut Champagne",
        price: 12000,
        pic: "wine/3/6pFwX3A_RJODoWCd8NCKAg_pb_x960.png",
        promotion: 0,
        beginner: 0,
        sale: 11,
        salePrice: 10900,
        saleYn: 0,
      },
    ],
  };
  // 상품 정렬 옵션
  const sortingOptions = [
    {
      value: 0,
      label: "최신등록순",
    },
    {
      value: 1,
      label: "오랜등록순",
    },
    {
      value: 2,
      label: "높은가격순",
    },
    {
      value: 3,
      label: "낮은가격순",
    },
  ];

  return (
    <div>
      <ProductListItemWrap>
        {/* 상품목록 */}
        <ul>
          <li></li>
          <li>
            {/* 상품정렬 */}
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: Gradation.wineD,
                  borderRadius: 4,
                  fontSize: 12,
                  controlHeight: 24,
                  colorBorder: "transparent",
                  colorPrimaryHover: "transparent",
                  fontFamily:
                    '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                },
              }}
            >
              <Select
                defaultValue={options[0]}
                onChange={handleChange}
                options={options}
              />
            </ConfigProvider>
          </li>
        </ul>
        <ContentsListItemWrap>{/* 상품 리스트 */}</ContentsListItemWrap>
      </ProductListItemWrap>
    </div>
  );
};

export default SearchList;
