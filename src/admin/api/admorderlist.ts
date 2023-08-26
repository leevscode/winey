/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/

import { client } from "../../api/client";

export const AdmOrderData = async () => {
  try {
    const res = await client.get(`/api/admin/order?page=1&row=15`);
    const orderData = await res.data;
    console.log(orderData);
    return orderData;
  } catch (error) {
    console.error("API 요청 중 오류 발생", error);
    return [];
  }
};

// 수정 예정
// export const orderStatusData = async () => {
//   try {
//     const res = await client.put(`/api/admin/order${orderStatusData}`);
//     const result = await res.data;
//     return result;
//   } catch (error) {
//     console.log(orderStatusData)
//   }
// };
