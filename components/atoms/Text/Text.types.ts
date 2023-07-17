import type { typoStyles } from "@omegup-school/ui-configs/typography";

export type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export interface TextProps {
  variant: keyof typeof typoStyles;
  text: string|number;
}