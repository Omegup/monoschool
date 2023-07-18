import { spacing } from '@omegup-school/ui-configs/sizes';
import { ReactNode } from 'react';

export interface ContainerProps {
  paddingInline?: keyof typeof spacing;
  paddingBlock?: keyof typeof spacing;
  gap?: keyof typeof spacing;
  direction?: 'column' | 'row';
  alignItems?: 'center' | 'start' | 'end';
  justifyContent?: 'center' | 'start' | 'end';
}
export interface ControlledContainerProps extends ContainerProps {
  children: ReactNode;
}
