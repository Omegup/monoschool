import { spacing, widths } from '@omegup-school/ui-configs/sizes';
import { ReactNode } from 'react';

export interface AvatarProps {
  size: keyof typeof widths.avatar;
  children?: ReactNode;
  onClick: () => void;
}
export interface AvatarImageProps {
  src: string;
}
