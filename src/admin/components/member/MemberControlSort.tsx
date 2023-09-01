/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { Select } from "antd";
import { IMemberSortOption } from "../../interface/MemberInterface";
import { SortSelectWrap } from "../../style/AdminMemberStyle";

export const initialSortOption: IMemberSortOption = { type: "0", sort: "0" };
const MemberControlSort = ({ setSortOption }: any) => {
  const sortValue: Record<string, IMemberSortOption> = {
    1: { type: "userId", sort: "asc" },
    2: { type: "userId", sort: "desc" },
    3: { type: "pickUp", sort: "asc" },
    4: { type: "pickUp", sort: "desc" },
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
              label: "회원번호",
              options: [
                { label: "회원번호↑", value: "1" },
                { label: "회원번호↓", value: "2" },
              ],
            },
            {
              label: "픽업지역",
              options: [
                { label: "픽업지역↑", value: "3" },
                { label: "픽업지역↓", value: "4" },
              ],
            },
          ]}
        />
      </SortSelectWrap>
    </div>
  );
};

export default MemberControlSort;
