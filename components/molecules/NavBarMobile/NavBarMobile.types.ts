import { ChildMenuProps, ControlledChildMenuProps} from "@omegup-school/ui-atoms/ChildMenu/ChildMenu.types";

export interface NavBarMobileProps {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  parentName: string;
   items: ChildMenuProps[]
}

export interface ControlledNavBarMobileProps extends NavBarMobileProps {
  onclick: (value: boolean) => void;
  onBlur: () => void;
}
