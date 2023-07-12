import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { borders, heights, spacing } from '@omegup-school/ui-configs/sizes';
import { typoStyles } from '@omegup-school/ui-configs/typography';
import { MouseEvent, ReactNode } from 'react';

export interface NakedButtonProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  borderColor?: keyof typeof colorsStyles;
  border?: keyof typeof borders;
  borderRadius?: keyof typeof borders;
  bg?: keyof typeof colorsStyles;
  shadow?: string;
  disabled?: boolean;
  textVariant?: keyof typeof typoStyles;
  paddingInline?: keyof typeof spacing;
  paddingBlock?: keyof typeof spacing;
  color?: keyof typeof colorsStyles;
  lineHeight?: keyof typeof heights.lineHieght;
}

export interface ControlledNakedButtonProps extends NakedButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}
