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

/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/

// listPathName에 따라 테이블 색상 변경
export interface ItableLayoutColor {
  listPathName: string;
}
