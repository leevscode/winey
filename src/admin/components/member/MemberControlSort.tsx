/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { Input, Select, Space } from "antd";
import { IMemberSortOption } from "../../interface/MemberInterface";
import { SortSelectWrap } from "../../style/AdminMemberStyle";
import Search from "antd/es/input/Search";

export const initialSortOption: IMemberSortOption = { type: "0", sort: "0" };
const MemberControlSort = ({
  setSortOption,
  memberList,
  setTextSearch,
  sortSearch,
  setSortSearch,
}: any) => {
  const sortValue: Record<string, IMemberSortOption> = {
    1: { type: "userId", sort: "asc" },
    2: { type: "userId", sort: "desc" },
    3: { type: "pickUp", sort: "asc" },
    4: { type: "pickUp", sort: "desc" },
  };
  const searchOptions = [
    {
      value: "serchUserName",
      label: "회원이름",
    },
    {
      value: "serchUserEmail",
      label: "회원아이디",
    },
  ];

  const handleSortChange = (value: string) => {
    if (sortValue[value]) {
      const { type, sort } = sortValue[value];
      setSortOption({ type, sort });
    } else {
      setSortOption(initialSortOption);
    }
  };
  const onChangOption = (e: string) => {
    setSortSearch(e);
  };
  const onTextSearch = (
    value: string,
    e?: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTextSearch(e);
  };

  return (
    <>
      {/* 정렬 */}
      <SortSelectWrap>
        <div className="table-top">
          <p className="total-count">
            총 <span>{memberList.totalRecordCount}</span>개
          </p>
          <div className="searchSort">
            <Space.Compact>
              <Select
                defaultValue={sortSearch}
                style={{ width: 120 }}
                onChange={e => onChangOption(e)}
                options={searchOptions}
              />
              <Search
                placeholder="검색어를 입력하세요."
                allowClear
                onSearch={e => onTextSearch(e)}
                style={{ width: 200 }}
              />
            </Space.Compact>
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
          </div>
        </div>
      </SortSelectWrap>
    </>
  );
};

export default MemberControlSort;
