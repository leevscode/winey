import { Select } from "antd";
import React, { useState } from "react";
import { IMemberSortOption } from "../../interface/MemberInterface";
import { SortSelectWrap } from "../../style/AdminMemberStyle";
import { initialSortOption } from "./MemberControlSort";

const MemberDetailSort = ({ setSortOption }: any) => {
  const sortValue: Record<string, IMemberSortOption> = {
    1: { type: "orderDate", sort: "asc" },
    2: { type: "orderDate", sort: "desc" },
    3: { type: "storeNm", sort: "asc" },
    4: { type: "storeNm", sort: "desc" },
    5: { type: "orderStatus", sort: "asc" },
    6: { type: "orderStatus", sort: "desc" },
  };

  const handleSortChange = (value: string) => {
    if (sortValue[value]) {
      const { type, sort } = sortValue[value];
      setSortOption({ type, sort });
    } else {
      setSortOption(initialSortOption);
    }
  };

  return (
    <div>
      {/* 정렬 */}
      <SortSelectWrap>
        <Select
          defaultValue="기본정렬"
          style={{ width: 120 }}
          onChange={handleSortChange}
          options={[
            {
              label: "주문날짜",
              options: [
                { label: "주문날짜↑", value: "1" },
                { label: "주문날짜↓", value: "2" },
              ],
            },
            {
              label: "픽업매장",
              options: [
                { label: "픽업매장↑", value: "3" },
                { label: "픽업매장↓", value: "4" },
              ],
            },
            {
              label: "주문상태",
              options: [
                { label: "주문상태↑", value: "5" },
                { label: "주문상태↓", value: "6" },
              ],
            },
          ]}
        />
      </SortSelectWrap>
    </div>
  );
};

export default MemberDetailSort;
