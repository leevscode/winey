import axios from "axios";
// import { IMemberList } from "../interface/LayoutInterface";

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
