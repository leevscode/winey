import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrinSquint,
  faFaceSmile,
  faFaceRollingEyes,
} from "@fortawesome/free-regular-svg-icons";
import { ReviewWrap } from "../../style/ProductDetailStyle";

const WineReview = ({ productDetail }) => {
  // 리뷰 갯수 표시
  const selReview = productDetail?.selReview;
  return (
    <ReviewWrap>
      <ul>
        <li>
          <div>
            <i>
              <FontAwesomeIcon icon={faFaceGrinSquint} />
            </i>
            <p>
              <span>좋아요</span>
              {selReview && selReview[0]}
            </p>
          </div>
        </li>
        <li>
          <div>
            <i>
              <FontAwesomeIcon icon={faFaceSmile} />
            </i>
            <p>
              <span>보통이에요</span>
              {selReview && selReview[1]}
            </p>
          </div>
        </li>
        <li>
          <div>
            <i>
              <FontAwesomeIcon icon={faFaceRollingEyes} />
            </i>
            <p>
              <span>취향이 아니에요</span>
              {selReview && selReview[2]}
            </p>
          </div>
        </li>
      </ul>
    </ReviewWrap>
  );
};

export default WineReview;
