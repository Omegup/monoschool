import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { ReactNode } from 'react';

export interface ContainerProps {
  paddingInline?: keyof typeof spacing;
  paddingBlock?: keyof typeof spacing;
  gap?: keyof typeof spacing;
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse';
  alignItems?: 'center' | 'start' | 'end' | 'space-between';
  justifyContent?: 'center' | 'start' | 'end' | 'space-between';
  shadow?: string;
  border?: keyof typeof borders;
  borderRadius?: keyof typeof borders;
  borderColor?: keyof typeof colorsStyles;
  bg?: keyof typeof colorsStyles;
  height?: number | string;
  width?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
}
export interface ControlledContainerProps extends ContainerProps {
  children: ReactNode;
}
