import { colors, colorsStyles } from '@omegup-school/ui-configs/colors';
import {
  borders,
  heights,
  opacities,
  spacing,
  widths,
} from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { NakedInputProps } from './NakedInput.type';
import { shadowXSmall } from '@omegup-school/ui-configs/effects/shadow';

export const useNakedInputStyles = createUseStyles({
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
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
      color: ({ color }: Partial<NakedInputProps>) =>
        color ? colorsStyles[color] : colorsStyles['dark_default'],
      '&::placeholder': {
        color: ({ colorPlaceholder }: Partial<NakedInputProps>) =>
          colorPlaceholder
            ? colorsStyles[colorPlaceholder]
            : colorsStyles['dark_default'],
      },
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
  shadow: {
    boxShadow: shadowXSmall,
    padding: spacing.s4,
    height: heights.input.small,
    maxHeight: heights.input.small,
    '& $svg': {
      color: colors.grey[400],
      width: widths.searchBar.small,
      height: widths.searchBar.small,
    },
    '&:has(input:focus)': {
      '& $input::placeholder': {
        color: colors.grey[500],
      },
      '& $svg': {
        color: colors.grey[500],
      },
      border: [borders.b2, 'solid', colors.background.overlay],
    },
  },
  default: {},
  endIcon: { display: 'flex', alignItems: 'center',cursor:'pointer' },
  ...styles,
});
