import { ControlledButtonSideBarProps } from "../ButtonSideBar";
import { ControlledHeaderSideBarProps } from "../HeaderSideBar";

export interface ChildMenuProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  icon?: JSX.Element ,
  label: string,
  selected?: boolean,
  id:number,
  isCollopsed?:boolean
}
export interface SubMenuProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  isOpened?:boolean;
  parentName: string;
  parentId:number;
  children:ChildMenuProps[]
}

export interface SideBarProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  children:JSX.Element[],
  header:ControlledHeaderSideBarProps,
  isOpened:boolean,
  button:ControlledButtonSideBarProps,
  
}

export interface ControlledSideBarProps extends SideBarProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
