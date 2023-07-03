import { ControlledButtonSideBarProps } from "../ButtonSideBar";
import { ControlledHeaderSideBarProps } from "../HeaderSideBar";
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
