import { ControlledChildMenuProps } from '@omegup-school/ui-atoms/ChildMenu/ChildMenu.types';

export type SubMenuViewMode = 'mobile' | 'default';
export interface SubMenuProps {
  isCollapsed?: boolean;
  title: string;
  viewMode?: SubMenuViewMode;
  items: ControlledChildMenuProps[];
}
export interface ControlledSubMenuProps extends SubMenuProps {
  onClick: () => void;
}
