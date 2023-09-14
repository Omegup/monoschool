import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { borders } from '@omegup-school/ui-configs/sizes';
import { typoStyles } from '@omegup-school/ui-configs/typography';
import { ReactNode,MouseEvent,ChangeEvent} from 'react';

// @wissem we shouldn't create unnecessary variants
export interface NakedInputProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  borderColor?: keyof typeof colorsStyles;
  border?: keyof typeof borders;
  disabled?: boolean;
  textVariant?: keyof typeof typoStyles;
  color?: keyof typeof colorsStyles;
  colorPlaceholder?: keyof typeof colorsStyles;
  placeholder?: string;
  variant:"shadow"|"default"
}

export interface ControlledNakedInputProps extends NakedInputProps {
  value: string;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
  onClickEndIcon?: (e:MouseEvent<HTMLSpanElement>) => void ;
}
