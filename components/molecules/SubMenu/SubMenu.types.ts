import { ChildMenuProps, ControlledChildMenuProps} from "@omegup-school/ui-atoms/ChildMenu/ChildMenu.types";

export interface SubMenuProps {
  isCollopsed?:boolean;
  title: string;
  parentId: number;
  viewMode?:'mobile'|'default';
  items: ChildMenuProps[]
}
export interface ControlledSubMenuProps extends SubMenuProps {
  onClick: (value: boolean) => void;
 }
