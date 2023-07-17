import { colorsStyles } from '@omegup-school/ui-configs/colors';
import {
  borders,
  heights,
  opacities,
  spacing,
} from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { NakedInputProps } from './NakedInput.type';

export const useNakedInputStyles = createUseStyles({
  inputContainer: {
    display: 'flex',
    paddingInline: spacing.s8,
    paddingBlock: spacing.s6,
    borderRadius: borders.r5,
    gap: spacing.s2,
    opacity: ({ disabled }: Partial<NakedInputProps>) =>
      disabled ? opacities.o1 : opacities.o2,
    border: ({ border, borderColor }: Partial<NakedInputProps>) =>
      borderColor
        ? `${border ? borders[border] : 0}px solid ${colorsStyles[borderColor]}`
        : '',
    '&>input': {
      color: colorsStyles['dark_default'],
      padding: 0,
      outline: 'none',
      border: 'none',
      height: heights.input.medium,
      maxHeight: heights.input.medium,
      flex: 1,
    },
    '&:has(input:focus)': {
      border: [borders.b4, 'solid', colorsStyles['blue_700']],
      borderRadius: borders.r5,
      '&>input': {},
    },
  },
  filledInput: {
    border: [borders.b4, 'solid', colorsStyles['dark_overline']],
    '&>input': {},
  },
  disabled: { backgroundColor: colorsStyles['background_default'] },
  ...styles,
});
