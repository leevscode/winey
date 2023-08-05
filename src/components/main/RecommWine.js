/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { getRandomWines } from "../../api/patchmain";
import { RecommWineTitle, RecommWineWrap } from "../../style/MainStyle";
import RecommWineSlide from "./RecommWineSlide";
import ProductListSkeleton from "../skeleton/ProductListSkeleton";

const RecommWine = () => {
  // 입문용 와인 데이터 보관할 state
  const [randomWines, setRandomWines] = useState([]);
  // 로딩 state
  const [isLoading, setIsLoading] = useState(true);
  const RandomWinesData = async () => {
    setIsLoading(true);
    try {
      const data = await getRandomWines();
      setRandomWines(data);
      console.log("데이터 받았어요", data);
      // setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    RandomWinesData();
  }, []);
  return (
    <RecommWineWrap>
      {/* 맞춤 와인 타이틀 */}
      <RecommWineTitle>
        <h2>
          <span>당신을 위한</span>
          <p>
            <span>
              <i>
                <img src="https://via.placeholder.com/7x17" alt="와인아이콘" />
              </i>
              입문용 와인 추천
            </span>
          </p>
        </h2>
      </RecommWineTitle>
      {/* 로딩 */}
      {/* {isLoading ? <ProductListSkeleton /> : null} */}

      {/* 맞춤 와인 내용 */}
      <RecommWineSlide />
    </RecommWineWrap>
  );
};

export default RecommWine;
