import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { borders, spacing, widths } from '@omegup-school/ui-configs/sizes';
import { MouseEvent, ReactNode } from 'react';

export interface IconContainerProps {
  children: ReactNode;
  rotation?: number;
  paddingInline?: keyof typeof spacing;
  paddingBlock?: keyof typeof spacing;
  width?: keyof typeof widths.icon;
  height?: keyof typeof widths.icon;
  color?: keyof typeof colorsStyles;
  bg?:keyof typeof colorsStyles;
  borderRadius?: keyof typeof borders;
}
export interface ControlledIconContainerProps extends IconContainerProps {
  onClick?: (e: MouseEvent) => void;
}
