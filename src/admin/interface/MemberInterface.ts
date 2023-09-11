/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

// 페이지네이션 인터페이스
export interface IinitialPg {
  page: number;
  row: number;
}

// 회원정보 state 인터페이스
export interface IMemberState {
  memberList: IMemControl;
  sortOption: IMemberSortOption;
  sortSearch: string;
  textSearch: string;
  paginate: IinitialPg;
  setMemberList: React.Dispatch<React.SetStateAction<IMemControl>>;
  setPaginate: React.Dispatch<React.SetStateAction<IinitialPg>>;
}

export interface IMemControl {
  pageableCustom: {
    page: number;
    row: number;
    totalElements: number;
  };
  content: IMemberListUser[];
}

export interface IMemberListUser {
  userId: number;
  email: string;
  nm: string;
  unm?: string;
  regionNmId: number;
  createdAt: string;
  textRegion?: string;
  value?: string;
}

export interface IUserDetailState {
  userInfomation: IUserDetail;
  setUserInfomation: React.Dispatch<React.SetStateAction<IUserDetail>>;
  clickUserId?: number;
  sortOption: IMemberSortOption;
}

export interface IUserIdState {
  clickUserId: number;
  setClickUserID?: React.Dispatch<React.SetStateAction<number>>;
}

export interface IUserDetail {
  pageableCustom: {
    page: number;
    row: number;
    totalElements: number;
  };
  userInfo: {
    userId: number;
    email: string;
    nm: string;
    unm?: string;
    sumOrderPrice: number;
    orderCount: number;
  };
  userOrderList?: IUserOrderListUpper;
  clickUserId?: number;
}
export interface IUserOrderListUpper {
  content: [
    {
      orderId: number;
      orderDate: string;
      nmKor: string;
      price: number;
      storeNm: string;
      count: number;
      orderStatus: number;
      textOrder?: string;
      // content?: IUserOrderListUpper;
    },
  ];
}
export interface IUserOrderList {
  orderId: number;
  orderDate: string;
  nmKor: string;
  price: number;
  storeNm: string;
  count: number;
  orderStatus: number;
  textOrder?: string;
  content?: IUserOrderListUpper;
}

export interface IMemberSortOption {
  type: string;
  sort: string;
}
