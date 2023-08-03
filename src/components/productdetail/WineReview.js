import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrinSquint,
  faFaceSmile,
  faFaceRollingEyes,
} from "@fortawesome/free-regular-svg-icons";
import { ReviewWrap } from "../../style/ProductDetailStyle";

const WineReview = () => {
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
              25
            </p>
          </div>
        </li>
        <li>
          <div>
            <i>
              <FontAwesomeIcon icon={faFaceSmile} />
            </i>
            <p>
              <span>보통이에요</span>5
            </p>
          </div>
        </li>
        <li>
          <div>
            <i>
              <FontAwesomeIcon icon={faFaceRollingEyes} />
            </i>
            <p>
              <span>취향이 아니에요</span>0
            </p>
          </div>
        </li>
      </ul>
    </ReviewWrap>
  );
};

export default WineReview;
