/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { ConfigProvider, Select } from "antd";
import { SortSelectWrap } from "../../style/AdminMemberStyle";
import { AdminColor } from "../../style/AdminLayoutStyle";

export interface ISort {
  setType: React.Dispatch<React.SetStateAction<string>>;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

const ProductControlSort = ({ setType, setSort }: ISort) => {
  const handleSortChange = (value: string) => {
    switch (value) {
      case "1":
        console.log("상품번호 오름차순", value);
        setType("productId");
        setSort("asc");
        break;
      case "2":
        console.log("상품번호 내림차순", value);
        setType("productId");
        setSort("desc");
        break;
      case "3":
        console.log("판매가격 높은가격순", value);
        setType("salePrice");
        setSort("desc");
        break;
      case "4":
        console.log("판매가격 낮은가격순", value);
        setType("salePrice");
        setSort("asc");
        break;
      case "5":
        console.log("높은할인율", value);
        setType("sale");
        setSort("desc");
        break;
      case "6":
        console.log("낮은할인율", value);
        setType("sale");
        setSort("asc");
        break;
      case "7":
        console.log("정상가 높은가격순", value);
        setType("price");
        setSort("desc");
        break;
      case "8":
        console.log("판매가격 낮은가격순", value);
        setType("price");
        setSort("asc");
        break;
      case "9":
        console.log("재고수량 오름차순", value);
        setType("quantity");
        setSort("desc");
        break;
      case "10":
        console.log("재고수량 내림차순", value);
        setType("quantity");
        setSort("asc");
        break;
      case "11":
        console.log("품절여부 Y", value);
        setType("quantity");
        setSort("asc");
        break;
      case "12":
        console.log("품절여부 N", value);
        setType("quantity");
        setSort("desc");
        break;
    }
  };
  return (
    <SortSelectWrap>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: AdminColor.headColorC,
          },
        }}
      >
        {/* 정렬 */}
        <Select
          defaultValue="기본정렬"
          onChange={handleSortChange}
          options={[
            {
              label: "상품번호",
              options: [
                { label: "상품번호↑", value: "1" },
                { label: "상품번호↓", value: "2" },
              ],
            },
            {
              label: "판매가격",
              options: [
                { label: "판매가격 높은가격순↑", value: "3" },
                { label: "판매가격 낮은가격순↓", value: "4" },
              ],
            },
            {
              label: "할인율",
              options: [
                { label: "높은할인율↑", value: "5" },
                { label: "낮은할인율↓", value: "6" },
              ],
            },
            {
              label: "정상가",
              options: [
                { label: "정상가 높은가격순↑", value: "7" },
                { label: "정상가 낮은가격순↓", value: "8" },
              ],
            },
            {
              label: "재고수량",
              options: [
                { label: "재고수량↑", value: "9" },
                { label: "재고수량↓", value: "10" },
              ],
            },
            {
              label: "품절여부",
              options: [
                { label: "품절여부 Y", value: "11" },
                { label: "품절여부 N", value: "12" },
              ],
            },
          ]}
        />
      </ConfigProvider>
    </SortSelectWrap>
  );
};

export default ProductControlSort;
