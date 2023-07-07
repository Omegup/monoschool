import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { NakedInputProps } from './NakedInput.type';

export const useNakedInputStyles = createUseStyles({
  inputContainer: {
    display: 'flex',
    '&>input': {
      paddingInline: spacing['s8'],
      paddingBlock: spacing['s6'],
      border: ({ border, borderColor }: Partial<NakedInputProps>) =>
        borderColor
          ? `${border ? spacing[border] : 0}px solid ${
              colorsStyles[borderColor]
            }`
          : '',
      borderRadius: borders['r5'],
      outline: 'none',
      height: 24,
      maxHeight: 24,
      flex: 1,
    },
    '&:has(input:focus)': {
      '&>input': {
        border: `${spacing.s1}px solid ${colorsStyles['blue_700']}`,
        borderRadius: borders['r5'],
      },
    },
  },
  filledInput: {
    '&>input': {
      border: `${spacing.s1}px solid ${colorsStyles['dark_overline']}`,
    },
  },
  disabled: { backgroundColor: colorsStyles['background_default'] },
  ...styles,
});
