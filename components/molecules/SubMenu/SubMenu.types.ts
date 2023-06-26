import { ChildMenuProps, ControlledChildMenuProps } from "../ChildMenu/ChildMenu.types";

export interface SubMenuProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  opened?:boolean;
  parentName: string;
  children:any[]
}

export interface ControlledSubMenuProps extends SubMenuProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
