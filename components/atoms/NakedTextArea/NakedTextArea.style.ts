import { colorsStyles } from '@omegup-school/ui-configs/colors';
import {
  borders,
  heights,
  opacities,
  spacing,
  widths,
} from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { NakedTextAreaProps } from './NakedTextArea.type';

export const useNakedTextAreaStyles = createUseStyles({
  inputContainer: {
    position: 'relative',
    display: 'flex',
    paddingInline: spacing.s3,
    paddingBlock: spacing.s3,
    gap: spacing.s2,
    border: ({ border, borderColor }: Partial<NakedTextAreaProps>) =>
      borderColor
        ? `${border ? borders[border] : 0}px solid ${colorsStyles[borderColor]}`
        : '',
    borderRadius: borders.r5,
    opacity: ({ disabled }: Partial<NakedTextAreaProps>) =>
      disabled ? opacities.o1 : opacities.o2,
    '&>textarea': {
      backgroundColor: 'transparent',
      paddingInlinestart: ({ startIcon }: Partial<NakedTextAreaProps>) =>
        startIcon ? 0 : spacing.s5,
      paddingInlineEnd: ({ endIcon }: Partial<NakedTextAreaProps>) =>
        endIcon ? `${+widths.icon.svg + spacing.s5}px` : spacing.s5,
      paddingBlock: spacing.s3,
      color: colorsStyles['dark_default'],
      lineHeight: heights.lineHieght.medium + 'px',
      border: 'none',
      outline: 'none',
      flex: 1,
      '&::-webkit-scrollbar': { display: 'none' },
    },
    '&:has(textarea:focus)': {
      border: [spacing.s1, 'solid', colorsStyles['blue_700']],
    },
  },
  startIcon: {
    marginBlockStart: ({ startIcon }: Partial<NakedTextAreaProps>) =>
      startIcon ? spacing.s3 : 0,
  },
  endIcon: {
    position: 'absolute',
    zIndex: 1,
    paddingInlineEnd: spacing.s5,
    insetInlineEnd: spacing.s3,
    insetBlockStart: spacing.s3,
    marginBlockStart: spacing.s3,
  },
  filledInput: {
    border: [spacing.s1, 'solid', colorsStyles['dark_overline']],
  },
  disabled: { backgroundColor: colorsStyles['background_default'] },
  ...styles,
});
