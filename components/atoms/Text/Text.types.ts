import type { typoStyles } from '@omegup-school/ui-configs/typography';
import type { colorsStyles } from '@omegup-school/ui-configs/colors';
import { heights } from '@omegup-school/ui-configs/sizes';

export interface TextProps {
  variant: keyof typeof typoStyles;
  text: string;
  color?: keyof typeof colorsStyles;
  ellipsis?: number;
  lineHeight?: keyof typeof heights.lineHieght;

}
