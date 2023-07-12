import { spacing, widths } from '@omegup-school/ui-configs/sizes';
import { ReactNode } from 'react';

export interface AvatarProps {
  // padding: keyof typeof spacing;
  size: keyof typeof widths.avatar;
  src?: string;
  children?: ReactNode;
}
export interface controlledAvatarProps extends AvatarProps {
  onClick: () => void;
}
