import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineGlass } from "@fortawesome/free-solid-svg-icons";
import { InfoTableWrap } from "../../style/ProductDetailStyle";

const WineInfoTable = ({ productDetail }) => {
  return (
    <InfoTableWrap>
      {productDetail.wineDetailVo && (
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
                  <td>{productDetail.wineDetailVo.categoryNm}</td>
                </tr>
                <tr>
                  <th>도수</th>
                  <td>약 {productDetail.wineDetailVo.alcohol}%</td>
                </tr>
                <tr>
                  <th>원산지</th>
                  <td>{productDetail.wineDetailVo.countryNm}</td>
                </tr>
                <tr>
                  <th>음용온도</th>
                  <td>약 {productDetail.wineDetailVo.temp}°C</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      )}
    </InfoTableWrap>
  );
};

export default WineInfoTable;
