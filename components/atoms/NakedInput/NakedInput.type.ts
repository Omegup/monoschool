import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { borders } from '@omegup-school/ui-configs/sizes';
import { typoStyles } from '@omegup-school/ui-configs/typography';
import { ReactNode } from 'react';

export interface NakedInputProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  borderColor?: keyof typeof colorsStyles;
  border?: keyof typeof borders;
  disabled?: boolean;
  textVariant?: keyof typeof typoStyles;
  placeholder?: string;
}

export interface ControlleNakedInputProps extends NakedInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
