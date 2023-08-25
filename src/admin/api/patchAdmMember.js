/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import axios from "axios";
// 멤버리스트 get
export const getMemberList = async ({ paginate, setMemberList }) => {
  try {
    const res = await axios.get(
      `/api/admin/user/list?page=${paginate.page}&row=${paginate.row}`,
    );
    console.log("res", res);
    const result = await res.data;
    setMemberList(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
