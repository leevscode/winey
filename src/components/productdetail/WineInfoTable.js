import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineGlass } from "@fortawesome/free-solid-svg-icons";
import { InfoTableWrap } from "../../style/ProductDetailStyle";

const WineInfoTable = () => {
  return (
    <InfoTableWrap>
      <ul>
        <li className="component-title">
          <i>
            <FontAwesomeIcon icon={faWineGlass} />
          </i>
          상품정보
        </li>
        <li>
          <table>
            <caption>상품정보</caption>
            <tbody>
              <tr>
                <th>타입</th>
                <td>화이트</td>
              </tr>
              <tr>
                <th>도수</th>
                <td>12.0%</td>
              </tr>
              <tr>
                <th>원산지</th>
                <td>프랑스</td>
              </tr>
              <tr>
                <th>음용온도</th>
                <td>6~8℃</td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>
    </InfoTableWrap>
  );
};

export default WineInfoTable;
