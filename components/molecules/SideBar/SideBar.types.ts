export interface SideBarProps {
  children:JSX.Element[],
  isCollopsed:boolean,
  buttonSideBar:JSX.Element
  headerSideBar:JSX.Element
}
export interface ControlledSideBarProps extends SideBarProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
