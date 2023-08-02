import { TextProps } from '@omegup-school/ui-atoms/Text/Text.types';

export interface FieldLabelProps {
  label: string;
  required?: boolean; // default false, optional prop to indicate if field is mandatory,
  size: 'medium' | 'xSmall';
  color?: TextProps['color'];
}
