import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { NakedInputProps } from './NakedInput.type';

export const useNakedInputStyles = createUseStyles({
  inputContainer: {
    display: 'flex',
    paddingInline: spacing['s8'],
    paddingBlock: spacing['s6'],
    borderRadius: borders['r5'],
    gap: spacing['s2'],
    opacity: ({ disabled }: Partial<NakedInputProps>) => (disabled ? 0.5 : 0.8),
    border: ({ border, borderColor }: Partial<NakedInputProps>) =>
      borderColor
        ? `${border ? spacing[border] : 0}px solid ${colorsStyles[borderColor]}`
        : '',
    '&>input': {
      color: colorsStyles['dark_default'],
      padding: 0,
      outline: 'none',
      border: 'none',
      height: 24,
      maxHeight: 24,
      flex: 1,
    },
    '&:has(input:focus)': {
      border: `${spacing.s1}px solid ${colorsStyles['blue_700']}`,
      borderRadius: borders['r5'],
      '&>input': {},
    },
  },
  filledInput: {
    border: `${spacing.s1}px solid ${colorsStyles['dark_overline']}`,
    '&>input': {},
  },
  disabled: { backgroundColor: colorsStyles['background_default'] },
  ...styles,
});
