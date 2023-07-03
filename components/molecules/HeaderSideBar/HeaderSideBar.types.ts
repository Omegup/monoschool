
export interface HeaderSideBarProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  title: string;
  Logo:JSX.Element;
  Search:JSX.Element;
  SearchIcon:({color, width}:{color?:string, width?:string})=>JSX.Element,
}

export interface ControlledHeaderSideBarProps extends HeaderSideBarProps {
  isOpened?:boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
