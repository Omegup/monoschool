import { ControlledButtonSideBarProps } from "../ButtonSideBar";
import { ControlledHeaderSideBarProps } from "../HeaderSideBar";
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
