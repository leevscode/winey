import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineGlassEmpty } from "@fortawesome/free-solid-svg-icons";
import { NotFoundWrap } from "../style/NotFound";

const NotFound = () => {
  return (
    <NotFoundWrap>
      <div className="img">
        <i>
          <FontAwesomeIcon icon={faWineGlassEmpty} />
        </i>
      </div>
      <div className="txt">
        <p>
          404
          <span>Page not found</span>
        </p>
        페이지를 찾을 수 없습니다.
      </div>
    </NotFoundWrap>
  );
};

export default NotFound;
