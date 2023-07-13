import { MouseEventHandler } from 'react';
export interface ButtonSideBarProps {
  isCollopsed?: boolean;
  iconButtonNotCollopsed: JSX.Element;
  iconButtonCollopsed: JSX.Element;
}

export interface ControlledButtonSideBarProps extends ButtonSideBarProps {
  collapseSidebar: (event:MouseEventHandler<HTMLDivElement>)=>void;
}
