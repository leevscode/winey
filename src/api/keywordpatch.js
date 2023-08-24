/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import { Modal } from "antd";
import { client } from "./client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
// const nav = useNavigate();
// 선호키워드리스트 유무 확인
export const getUserFavoriteKey = async () => {
  try {
    const res = await client.get("/api/recommend/getUserInfo");
    const result = await res.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 선호키워드 선택 post
export const postUserKeyword = async (favoriteKeyword, navigator) => {
  try {
    const res = await client.post("/api/recommend/wine", {
      categoryId: favoriteKeyword.categoryId,
      countryId: favoriteKeyword.countryId,
      smallCategoryId: favoriteKeyword.smallCategoryId,
      priceRange: favoriteKeyword.priceRange,
      aromaCategoryId: favoriteKeyword.aromaCategoryId,
    });
    const data = await res.data;
    navigator("/main");
  } catch (error) {
    console.log(error);
    Modal.error({
      icon: (
        <i className="color_r">
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </i>
      ),
      okText: "확인",
      wrapClassName: "info-modal-wrap error-modal",
      maskClosable: true,
      title: "키워드 재선택",
      content: (
        <p>
          선택 키워드에 대한 와인리스트가 없습니다. <br />
          키워드를 다시 선택해주세요.
        </p>
      ),
    });
    navigator("/keywordselect");
  }
};

// 기존 선호키워드 정보 get
export const getUserKeyword = async setYourKeyword => {
  try {
    const res = await client.get("/api/recommend/getrecommend");
    const result = await res.data;
    setYourKeyword(result);
  } catch (error) {
    console.log(error);
  }
};

// 선호키워드 수정 put
export const putUserKeyword = async (editFavoriteKeyword, navigator) => {
  try {
    const res = await client.post("/api/recommend/updrecommend", {
      categoryId: editFavoriteKeyword.categoryId,
      countryId: editFavoriteKeyword.countryId,
      smallCategoryId: editFavoriteKeyword.smallCategoryId,
      priceRange: editFavoriteKeyword.priceRange,
      aromaCategoryId: editFavoriteKeyword.aromaCategoryId,
    });
    const data = await res.data;
    navigator("/main");
  } catch (error) {
    console.log(error);
    Modal.error({
      icon: (
        <i className="color_r">
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </i>
      ),
      okText: "확인",
      wrapClassName: "info-modal-wrap error-modal",
      maskClosable: true,
      title: "키워드 재선택",
      content: (
        <p>
          선택 키워드에 대한 와인리스트가 없습니다. <br />
          키워드를 다시 선택해주세요.
        </p>
      ),
    });
    navigator("/keywordselectedit");
  }
};
