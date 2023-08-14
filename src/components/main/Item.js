import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NoImage from "../../assets/no_image.jpg";
import { ProductListItem } from "../../style/ProductStyle";
import { addCart, cartLengthData } from "../../api/patchcart";

const Item = ({ foodWines, setIsModalOpen }) => {
  const navigate = useNavigate();
  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  // 회원 장바구니 버튼 클릭 이벤트
  const showModal = useCallback(
    (_iproduct, e) => {
      e.preventDefault();
      addCart(_iproduct);
      cartLengthData(dispatch);
      setIsModalOpen(true);
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
  return (
    <>
      {foodWines?.map((item, index) => (
        <ProductListItem key={item.productId}>
          <Link to={`/productdetail/${item.productId}`}>
            <div className="img">
              {/* 상품 사진 */}
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
                <li>
                  <span>
                    {item.salePrice === null
                      ? item.price.toLocaleString()
                      : item.salePrice.toLocaleString()}
                  </span>
                  원
                </li>
                <li>
                  <span>{item.price.toLocaleString()}원</span>
                </li>
              </ul>
            </div>
          </Link>
        </ProductListItem>
      ))}
    </>
  );
};

export default React.memo(Item);
