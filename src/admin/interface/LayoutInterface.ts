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
