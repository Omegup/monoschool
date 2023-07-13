import { MouseEventHandler } from 'react';
export interface ButtonSideBarProps {
  isCollopsed?: boolean;
  iconButtonNotCollopsed: JSX.Element;
  iconButtonCollopsed: JSX.Element;
}

export interface ControlledButtonSideBarProps extends ButtonSideBarProps {
  onCollopsed: MouseEventHandler<HTMLDivElement>;
}
