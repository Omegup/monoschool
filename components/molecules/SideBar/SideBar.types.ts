import { SubSideBarProps } from "../SubSideBar";

export interface SideBarProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  closed:boolean,
  title: string;
  list:SubSideBarProps[]
}

export interface ControlledSideBarProps extends SideBarProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
