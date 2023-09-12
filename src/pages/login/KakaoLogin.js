/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../api/cookie";
import { useDispatch } from "react-redux";
import { getMemberInfo } from "../../api/joinpatch";
import { cartLengthData } from "../../api/patchcart";
import { getUserFavoriteKey } from "../../api/keywordpatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

// const REST_API_KEY = "63c2ccf48233929cf35206dbb6fcdb14";
// const REDIRECT_URI = "http://192.168.0.144:5004/oauth/main";

const KakaoLogin = () => {
  // const [searchParams, setSearchParams] = useSearchParams()
  const accessToken = window.location.search.replace("?access_token=", "");
  console.log("카카오 값 : ", accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 에러 모달
  const viewErrorModal = error => {
    return {
      icon: (
        <i className="color_r">
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </i>
      ),
      okText: "확인",
      wrapClassName: "info-modal-wrap error-modal",
      maskClosable: true,
      title: "로그인 실패",
      content: error ? <p>{error}</p> : <p>네트워크 오류입니다.</p>,
    };
  };
  console.log("(1) access_token");

  setCookie("access_token", accessToken);
  const startKKO = async () => {
    dispatch(getMemberInfo());
    cartLengthData(dispatch);

    // 선호키워드 정보 유무
    console.log("(2) getUserFavoriteKey");
    const favoriteKeyInfo = await getUserFavoriteKey();
    // 키워드 정보가 있으면 바로 메인으로, 없으면 키워드 선택 페이지로
    if (favoriteKeyInfo.length > 0) {
      navigate("/main");
    } else {
      navigate("/keywordselect");
    }
    /*
    try {
      // 카카오 로그인 후 정보 요청하기
      //const login = await fetchKKOLogin(accessToken);
      if (login.roleType == "USER") {
        // 로그인성공 후 cookie에 있는 accessToken을 확인하자
        // 회원 정보 저장
        dispatch(getMemberInfo());
        cartLengthData(dispatch);

        // 선호키워드 정보 유무를 받아오자
        const favoriteKeyInfo = await getUserFavoriteKey();
        // 키워드 정보가 있으면 바로 메인으로, 없으면 키워드 선택 페이지로 가자
        if (favoriteKeyInfo.length > 0) {
          navigate("/main");
        } else {
          navigate("/keywordselect");
        }
      }
      if (login.roleType == "ADMIN") {
        navigate("/admin");
      } else {
        console.log("로그인에러메세지else", login.response.data.message);
        const errorConfig = viewErrorModal(login.response.data.message);
        Modal.warning(errorConfig);
      }
    } catch (error) {
      return;
    }
    */
  };

  startKKO();

  return <></>;
};

export default KakaoLogin;
