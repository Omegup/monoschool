import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { NakedDropDownProps } from './NakedDropDown.type';

export const useNakedDropDownStyles = createUseStyles({
  selectContainer: {
    width: '100%',
    border: ({ border, borderColor }: Partial<NakedDropDownProps>) =>
      borderColor
        ? `${border ? spacing[border] : 0}px solid ${colorsStyles[borderColor]}`
        : '',
    paddingInline: spacing['s8'],
    paddingBlock: spacing['s6'],
    borderRadius: borders['r5'],
    height: 24,
    '&>select': {
      width: '100%',
      backgroundColor: 'transparent',
      color: colorsStyles['dark_default'],
      lineHeight: '24px',
      height: 24,
      border: 'none',
      outline: 'none',
      padding: 0,
      flex: 1,
      fontFamily: 'Poppins',
      '&::-webkit-resizer': {},
      '&::-webkit-scrollbar': { display: 'none' },
    },
  },
  filledInput: {
    border: `${spacing.s1}px solid ${colorsStyles['dark_overline']}`,
    '&>textarea': {},
  },
  disabled: { backgroundColor: colorsStyles['background_default'] },
  ...styles,
});
