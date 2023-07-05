
export interface HeaderSideBarProps {
  title: string;
  Logo:JSX.Element;
  Search:JSX.Element;
  SearchIcon:JSX.Element,
}

export interface ControlledHeaderSideBarProps extends HeaderSideBarProps {
  isOpened?:boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
