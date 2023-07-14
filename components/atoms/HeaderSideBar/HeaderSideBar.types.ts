
export interface HeaderSideBarProps {
  title: JSX.Element;
  logo:JSX.Element;
  search:JSX.Element;
  searchIcon:JSX.Element,
}

export interface ControlledHeaderSideBarProps extends HeaderSideBarProps {
  isCollopsed?:boolean;
  onClick:() => void;
  logoOnClick:() => void;
}
