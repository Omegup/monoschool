import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { spacing } from '@omegup-school/ui-configs/sizes';
import { typoStyles } from '@omegup-school/ui-configs/typography';
import { ReactNode } from 'react';

interface opt {
  id: any;
  label: string;
}
interface option extends opt {}

export interface NakedDropDownProps {
  startIcon?: ReactNode;
  borderColor?: keyof typeof colorsStyles;
  border?: keyof typeof spacing;
  disabled?: boolean;
  textVariant?: keyof typeof typoStyles;
  placeholder?: string;
}

export interface ControlleNakedDropDownProps extends NakedDropDownProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: option[];
}
