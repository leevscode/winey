/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import {
  IMemControl,
  IUserDetail,
} from "../interface/MemberInterface";
import { client } from "../../api/client";

// 멤버리스트 get
export const getMemberList = async (
  paginate: {
    page: number;
    row: number;
  },
  setMemberList: React.Dispatch<React.SetStateAction<IMemControl>>,
  sortOption: {
    type: string;
    sort: string;
  },
) => {
  try {
    const res = await client.get(
      `/api/admin/user/list?page=${paginate.page}&row=${paginate.row}&type=${sortOption.type}&sort=${sortOption.sort}`,
    );
    console.log("res", res);
    const result: IMemControl = await res.data;
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
  sortOption: {
    type: string;
    sort: string;
  },
) => {
  try {
    const res = await client.get(
      `/api/admin/${clickUserId}/order?page=${paginate.page}&row=${paginate.row}&type=${sortOption.type}&sort=${sortOption.sort}`,
    );
    console.log("res", res);
    const result = await res.data;
    console.log("result", result);
    setUserInfomation(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 회원삭제
export const putMemberOut = async (item: number) => {
  console.log("patch item", item);
  try {
    const res = await client.put(`/api/admin/withdrawal?userId=${item}`);
    console.log("res", res);
    const result = await res.data;
    console.log("result", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
