import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// 관리자
import Admin from "./Admin";
import AdminHome from "./pages/admin/AdminHome";
// 사용자
import User from "./User";
import Intro from "./pages/Intro";
import AdultChk from "./pages/AdultChk";
import Main from "./pages/Main";
import ProductDetail from "./pages/product/ProductDetail";
import ProductSell from "./pages/product/ProductSell";
import ProductComplete from "./pages/product/ProductComplete";
import ProductCompleteCart from "./pages/product/ProductCompleteCart";
import Login from "./pages/login/Login";
import Join from "./pages/login/Join";
import KeywordSelect from "./pages/login/KeywordSelect";
import KeywordSelectEdit from "./pages/login/KeywordSelectEdit";
import MypageList from "./pages/MypageList";
import ProductCart from "./pages/product/ProductCart";
import WineGuide from "./pages/WineGuide";
import JoinEdit from "./pages/login/JoinEdit";
import About from "./pages/About";
import OpenSource from "./pages/OpenSource";
import SellList from "./pages/product/SellList";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
import SellListDetail from "./pages/product/SellListDetail";
import { useEffect, useState } from "react";
import Welcome from "./components/join/Welcome";
import ProductSellCart from "./pages/product/ProductSellCart";
import Food from "./pages/productmain/Food";
import Country from "./pages/productmain/Country";
import Price from "./pages/productmain/Price";
import ProductMain from "./pages/productmain/ProductMain";
import Red from "./components/productlist/Red";
import White from "./components/productlist/White";
import Spakling from "./components/productlist/Spakling";
import Etc from "./components/productlist/Etc";
import ProductList from "./pages/productlist/ProductList";

function App() {
  // 페이지 이동 시 스크롤 최상단으로 올라가는 코드
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <AnimatePresence>
      <Routes>
        {/* 관리자 페이지 */}
        {/* -> 관리자 페이지 추후 별도 프로젝트 생성해서 작업 할 것 */}
        <Route element={<Admin />}>
          <Route path="/admin" element={<AdminHome />} />
        </Route>
        {/* 인트로 */}
        <Route path="/" element={<Intro />} />
        {/* 성인인증 */}
        <Route path="/adultchk" element={<AdultChk />} />
        {/* 사용자 페이지 */}
        <Route element={<User />}>
          {/* 메인 */}
          <Route path="/main" element={<Main />} />
          {/* 상품 메인 추천별 상품리스트  */}
          <Route path="/productmain" element={<ProductMain />}>
            <Route path="food" element={<Food />} />
            <Route path="country" element={<Country />} />
            <Route path="price" element={<Price />} />
            <Route index path="*" element={<NotFound />} />
          </Route>
          {/* 상품리스트 */}
          <Route path="/productlist" element={<ProductList />}>
            <Route path="red" element={<Red />} />
            <Route path="white" element={<White />} />
            <Route path="spakling" element={<Spakling />} />
            <Route path="etc" element={<Etc />} />
            <Route index path="*" element={<NotFound />} />
          </Route>
          {/* 상품상세페이지 */}
          <Route path="/productdetail/:iproduct" element={<ProductDetail />} />
          {/* 구매하기(상세페이지에서 바로결제) */}
          <Route path="/productsell/:isell" element={<ProductSell />} />
          {/* 구매하기(장바구니에서 결제) */}
          <Route path="/productsellcart" element={<ProductSellCart />} />
          {/* 구매완료 */}
          <Route path="/productcomplete" element={<ProductComplete />} />
          {/* 카트 구매완료 */}
          <Route
            path="/ProductCompleteCart"
            element={<ProductCompleteCart />}
          />
          {/* 로그인 */}
          <Route path="/login" element={<Login />} />
          {/* 회원가입 */}
          <Route path="/join" element={<Join />} />
          {/* 회원가입환영 */}
          <Route path="/welcome" element={<Welcome />} />
          {/* 키워드선택 */}
          <Route path="/keywordselect" element={<KeywordSelect />} />
          {/* 마이페이지 */}
          <Route path="/mypageList" element={<MypageList />} />
          {/* 장바구니 */}
          <Route path="/cart" element={<ProductCart />} />
          {/* 주문내역 */}
          <Route path="/selllist" element={<SellList />} />
          {/* 주문내역상세페이지 */}
          <Route
            path="/selllistdetail/:iselllist"
            element={<SellListDetail />}
          />
          {/* 선호키워드변경 */}
          <Route path="/keywordselectedit" element={<KeywordSelectEdit />} />
          {/* 와인가이드 */}
          <Route path="/windeguide" element={<WineGuide />} />
          {/* 정보수정 */}
          <Route path="/joinedit" element={<JoinEdit />} />
          {/* 만든사람들 */}
          <Route path="/about" element={<About />} />
          {/* 오픈소스 */}
          <Route path="/opensource" element={<OpenSource />} />
          {/* 잘못된 경로 페이지 처리 */}
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
