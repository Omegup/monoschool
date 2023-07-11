import { spacing } from '@omegup-school/ui-configs/sizes';
import { MouseEvent, ReactNode } from 'react';

export interface IconContainerProps {
  children: ReactNode;
  rotation?: number;
  paddingInline?: keyof typeof spacing;
  paddingBlock?: keyof typeof spacing;
}
export interface ControlledIconContainerProps extends IconContainerProps {
  onClick?: (e: MouseEvent) => void;
}
