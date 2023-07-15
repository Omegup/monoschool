import { spacing } from '@omegup-school/ui-configs/sizes';
import { ReactNode } from 'react';

export interface ContainerProps {
  paddingInline?: keyof typeof spacing;
  paddingBlock?: keyof typeof spacing;
  gap?: keyof typeof spacing;
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse';
  alignItems?: 'center' | 'start' | 'end' | 'stretch';
  justifyContent?: 'center' | 'start' | 'end' | 'stretch';
}
export interface ControlledContainerProps extends ContainerProps {
  children: ReactNode;
}
