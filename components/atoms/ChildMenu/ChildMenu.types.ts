import { ReactNode } from 'react';

export type ChildMenuSize = 'large' | 'medium' | 'small';

export type ChildMenuViewMode = 'mobile' | 'default';
export interface ChildMenuProps {
  size: ChildMenuSize;
  icon?: ReactNode;
  label: string;
  isSelected?: boolean;
  isCollapsed?: boolean;
  viewMode?: ChildMenuViewMode;
}
export interface ControlledChildMenuProps extends ChildMenuProps {
  onClick: () => void;
  onBlur?: () => void;
}
