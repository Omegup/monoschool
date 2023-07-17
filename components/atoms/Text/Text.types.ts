import type { typoStyles } from '@omegup-school/ui-configs/typography';
import type { colorsStyles } from '@omegup-school/ui-configs/colors';

export interface TextProps {
  variant: keyof typeof typoStyles;
  text: string|number;
  color?: keyof typeof colorsStyles;
}
