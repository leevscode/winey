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
