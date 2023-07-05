import { ControlledButtonSideBarProps } from "../ButtonSideBar";
import { ControlledHeaderSideBarProps } from "../HeaderSideBar";

export interface ChildMenuProps {
  disabled?: boolean;
  icon?: JSX.Element ,
  label: string,
  selected?: boolean,
  id:number,
  isCollopsed?:boolean
}
export interface SubMenuProps {
  disabled?: boolean;
  isOpened?:boolean;
  parentName: string;
  parentId:number;
  items:ChildMenuProps[]
}

export interface SideBarProps {
  children:JSX.Element[],
  header:ControlledHeaderSideBarProps,
  isCollopsed:boolean,
  button:ControlledButtonSideBarProps,
  
}

export interface ControlledSideBarProps extends SideBarProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
