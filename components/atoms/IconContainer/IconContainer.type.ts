import * as icons from '@omegup-school/ui-assets/icons';
import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { spacing, widths } from '@omegup-school/ui-configs/sizes';
import { MouseEvent } from 'react';
export interface IconContainerProps {
  icon?: keyof typeof icons;
  rotation?: number;
  paddingInline?: keyof typeof spacing;
  paddingBlock?: keyof typeof spacing;
  width?: keyof typeof widths.icon;
  height?: keyof typeof widths.icon;
  color?: keyof typeof colorsStyles;
}
export interface ControlledIconContainerProps extends IconContainerProps {
  onClick?: (e: MouseEvent) => void;
}
