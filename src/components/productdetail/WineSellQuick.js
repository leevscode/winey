/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SellQuickWrap } from "../../style/ProductDetailStyle";
import { addCart, cartLengthData } from "../../api/patchcart";

const WineSellQuick = ({ iproduct, setIsModalOpen }) => {
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
  return (
    <SellQuickWrap>
      <ul>
        <li>
          <NavLink to={userData.userId ? `/productsell/${iproduct}` : `/login`}>
            구매하기
          </NavLink>
        </li>
        <li>
          <button
            onClick={
              userData.userId
                ? e => showModal(iproduct, e)
                : e => handleNotUser(e)
            }
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/icon_cart_1.svg`}
              alt="장바구니"
            />
          </button>
        </li>
      </ul>
    </SellQuickWrap>
  );
};

export default WineSellQuick;
