/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

export interface IMenu {
  key: string;
  icon: JSX.Element;
  title: string;
  items: ISubMenu[];
}

export interface ISubMenu {
  key: string;
  label: string;
  link: string;
}
export interface IMemberState {
  memberList: IMemberListObject[];
  setMemberList: React.Dispatch<React.SetStateAction<Array<IMemberList>>>;
}
export interface IPage {
  // paginate: number;
  setPaginate: React.Dispatch<React.SetStateAction<number>>;
}

export interface IMemberList {
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
  list: IMemberListObject[];
}
export interface IMemberListObject {
  userId: number;
  email: string;
  nm: string;
  regionNmId: number;
}

export interface ObjectType {
  [key: string | number]: any;
}
