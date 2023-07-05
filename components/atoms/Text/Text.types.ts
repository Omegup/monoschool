export type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export interface TextProps {
  weight: Weight;
  size: 'large' | 'medium' | 'small' | 'XSmall';
}
export interface ControlledTextProps extends TextProps {
  value: string;
  onClick?: () => void;
}
