/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

export interface IMemberState {
  memberList: IMemControl;
  setMemberList: React.Dispatch<React.SetStateAction<IMemControl>>;
}

export interface IinitialPg {
  page: number;
  row: number;
}

export interface IMemControl {
  page: {
    page: number;
    row: number;
    startIdx: number;
    totalRecordCount: number;
    totalPage: number;
    pageSize: number;
    prev: boolean;
    next: boolean;
    startPage: number;
    endPage: number;
  };
  list: IMemberListUser[];
}

export interface IMemberListUser {
  userId: number;
  email: string;
  nm: string;
  regionNmId: number;
  textRegion?: string;
  value?: string;
}
