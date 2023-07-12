import { colors } from "@omegup-school/ui-configs/colors";
import type { typoStyles } from "@omegup-school/ui-configs/typography";

export type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export interface TextProps {
  variant: keyof typeof typoStyles;
  text: string;
  lineHeigt?:string;
  letterSpacing?:'0.12px'
  textTransform?:'uppercase'|'lowercase'
  color? :string,

}