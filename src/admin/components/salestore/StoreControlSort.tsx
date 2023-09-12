/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { ConfigProvider, Modal, Select, Space } from "antd";
import { IMemberSortOption } from "../../interface/MemberInterface";
import { SortSelectWrap } from "../../style/AdminMemberStyle";
import Search from "antd/es/input/Search";
import { AdminColor } from "../../style/AdminLayoutStyle";

export const initialSortOption: IMemberSortOption = {
  type: "storeid",
  sort: "DESC",
};
const StoreControlSort = ({
  storeInfomation,
  setSortOption,
  textSearch,
  setTextSearch,
  sortSearch,
  setSortSearch,
  paginate,
  setPaginate,
}: any) => {
  const sortValue: Record<string, IMemberSortOption> = {
    1: { type: "storenm", sort: "ASC" },
    2: { type: "storenm", sort: "DESC" },
    3: { type: "address", sort: "ASC" },
    4: { type: "address", sort: "DESC" },
    5: { type: "storeid", sort: "ASC" },
    6: { type: "storeid", sort: "DESC" },
  };
  const searchOptions = [
    {
      value: "storename",
      label: "매장명",
    },
    {
      value: "storeaddress",
      label: "매장주소",
    },
  ];

  const handleSortChange = (value: string) => {
    // console.log("value", value);
    if (sortValue[value]) {
      const { type, sort } = sortValue[value];
      setSortOption({ type, sort });
    } else {
      setSortOption(initialSortOption);
    }
  };
  const onChangOption = (e: any) => {
    setSortSearch(e);
  };
  const onTextSearch = (
    value: string,
    e?: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPaginate({ page: 1, row: 10 });
    if (value == "") {
      Modal.error({
        okText: "예",
        wrapClassName: "info-modal-wrap notice-modal",
        maskClosable: true,
        content: (
          <ul>
            <li>검색할 단어를 입력해 주세요.</li>
          </ul>
        ),
      });
      return;
    }
    setTextSearch(value);
  };

  return (
    <>
      {/* 정렬 */}
      <SortSelectWrap>
        <div className="table-top">
          <p className="total-count">
            총 <span>{storeInfomation?.pageableCustom?.totalElements}</span>개
          </p>
          <div className="searchSort">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: AdminColor.yellowC,
                },
              }}
            >
              <Space.Compact>
                <Select
                  // defaultValue={sortSearch}
                  defaultValue={"검색옵션"}
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
                    label: "매장이름",
                    options: [
                      { label: "매장이름↑", value: "1" },
                      { label: "매장이름↓", value: "2" },
                    ],
                  },
                  {
                    label: "매장주소",
                    options: [
                      { label: "매장주소↑", value: "3" },
                      { label: "매장주소↓", value: "4" },
                    ],
                  },
                  {
                    label: "매장번호",
                    options: [
                      { label: "매장번호↑", value: "5" },
                      { label: "매장번호↓", value: "6" },
                    ],
                  },
                ]}
              />
            </ConfigProvider>
          </div>
        </div>
      </SortSelectWrap>
    </>
  );
};

export default StoreControlSort;
