/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React, { useCallback } from "react";
import { ProductListItem } from "../../style/ProductStyle";
import { Link, useNavigate } from "react-router-dom";
import NoImage from "../../assets/no_image.jpg";
import { addCart, cartLengthData } from "../../api/patchcart";
import { useDispatch, useSelector } from "react-redux";

const SearchListItem = ({ setIsModalOpen, hasNextPage, finalItem }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);

  // 회원 장바구니 버튼 클릭 이벤트
  const showModal = useCallback(
    async (_iproduct, e) => {
      e.preventDefault();
      const result = await addCart(_iproduct);
      if (result !== null) {
        // 에러가 발생하지 않았을 경우에만 모달 열기
        cartLengthData(dispatch);
        setIsModalOpen(true);
      }
    },
    [setIsModalOpen],
  );
  // 비회원 장바구니 버튼 클릭 이벤트
  const handleNotUser = useCallback(
    e => {
      e.preventDefault();
      navigate("/login");
    },
    [setIsModalOpen],
  );
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  return (
    <>
      {finalItem.result?.map((item, index) => (
        <ProductListItem key={"uid" + index}>
          <Link to={`/productdetail/${item.productId}`}>
            <div className="img">
              <img
                src={`/img/${item.pic}`}
                alt={item.nmKor}
                onError={onImgError}
              />
              {/* 장바구니 버튼 */}
              <button
                onClick={
                  userData.userId
                    ? e => showModal(item.productId, e)
                    : e => handleNotUser(e)
                }
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon_cart_2.svg`}
                  alt="장바구니에 담기"
                />
              </button>
            </div>
            <div className="txt">
              <div className="badge">
                {item.promotion === 1 && (
                  <span className="recommend">추천상품</span>
                )}
                {item.beginner === 1 && (
                  <span className="beginner">입문자추천</span>
                )}
              </div>
              <div className="title">{item.nmKor}</div>
              <ul className="price">
                <li className="top">
                  <span>{item.salePrice.toLocaleString()}</span>원
                </li>
                {item.saleYn === 1 ? (
                  <li className="bottom">
                    <span>{item.price.toLocaleString()}원</span>
                  </li>
                ) : null}
              </ul>
            </div>
          </Link>
        </ProductListItem>
      ))}
    </>
  );
};

export default SearchListItem;
