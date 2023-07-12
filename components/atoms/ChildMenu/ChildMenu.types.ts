import { ReactNode } from "react";

export interface ChildMenuProps {
  size: 'large' | 'medium' | 'small';
  icon?:ReactNode ,
  label: string,
  selected?: boolean,
  isCollopsed?:boolean,
  viewMode?:'mobile'|'default',
  alignSelf?: 'stretch'|'end'|'center'
}
export interface ControlledChildMenuProps extends ChildMenuProps {
  onClick: (value: boolean) => void;
  onBlur: () => void;
}
 