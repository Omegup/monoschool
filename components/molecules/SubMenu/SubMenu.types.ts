import { ChildMenuProps, ControlledChildMenuProps } from "../ChildMenu/ChildMenu.types";

export interface SubMenuProps {
  size: 'large' | 'medium' | 'small';
  isCollopsed?:boolean;
  parentName: string;
  parentId: number;
  viewMode?:'mobile'|'default';
  items: ChildMenuProps[]
}
export interface ControlledSubMenuProps extends SubMenuProps {
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
