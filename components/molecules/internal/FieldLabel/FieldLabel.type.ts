import { colorsStyles } from '@omegup-school/ui-configs/colors';

export interface FieldLabelProps {
  label: string;
  required?: boolean; // default false, optional prop to indicate if field is mandatory,
  size: 'medium' | 'xSmall';
  color?: keyof typeof colorsStyles;
}
