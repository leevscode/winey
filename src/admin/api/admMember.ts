import axios from "axios";

// 멤버리스트 get
export const getMemberList = async ({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) => {
  try {
    const res = await axios.get(
      `/api/admin/user/list?page=${page}&row=${pageSize}`,
    );
    const result = await res.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};
