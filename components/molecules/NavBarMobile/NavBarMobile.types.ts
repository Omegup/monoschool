import { ChildMenuProps, ControlledChildMenuProps } from "../ChildMenu/ChildMenu.types";

export interface NavBarMobileProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  parentName: string;
  parentId: number;
  items: ChildMenuProps[]
}

export interface ControlledNavBarMobileProps extends NavBarMobileProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
