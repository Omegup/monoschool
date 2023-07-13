import { MouseEventHandler } from "react";

export interface HeaderSideBarProps {
  title: JSX.Element;
  logo:JSX.Element;
  search:JSX.Element;
  searchIcon:JSX.Element,
  isCollopsed?:boolean;
}

export interface ControlledHeaderSideBarProps extends HeaderSideBarProps {
  onClickSearsh:(e:MouseEventHandler<HTMLDivElement>)=>void;
  onClickLogo:(e:MouseEventHandler<HTMLDivElement>)=>void;
}
