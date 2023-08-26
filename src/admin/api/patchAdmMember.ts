/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import axios from "axios";
import { IMemControl, IUserDetail } from "../interface/MemberInterface";

// 멤버리스트 get
export const getMemberList = async (
  paginate: {
    page: number;
    row: number;
  },
  setMemberList: React.Dispatch<React.SetStateAction<IMemControl>>,
) => {
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

// 회원 상세리스트 get
export const getMemberDetail = async (
  paginate: {
    page: number;
    row: number;
  },
  setUserInfomation: React.Dispatch<React.SetStateAction<IUserDetail>>,
  clickUserId: number | undefined,
) => {
  try {
    const res = await axios.get(
      `/api/admin/${clickUserId}/order?page=${paginate.page}&row=${paginate.row}`,
    );
    console.log("res", res);
    const result = await res.data;
    setUserInfomation(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
