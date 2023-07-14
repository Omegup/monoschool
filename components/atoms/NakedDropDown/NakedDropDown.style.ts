import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { borders, heights, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { NakedDropDownProps } from './NakedDropDown.type';

export const useNakedDropDownStyles = createUseStyles({
  selectContainer: {
    width: '100%',
    border: ({ border, borderColor }: Partial<NakedDropDownProps>) =>
      borderColor
        ? `${border ? borders[border] : 0}px solid  ${
            colorsStyles[borderColor]
          }`
        : '',
    paddingInline: spacing.s8,
    paddingBlock: spacing.s6,
    borderRadius: borders.r5,
    '&>select': {
      width: '100%',
      backgroundColor: 'transparent',
      color: colorsStyles['dark_default'],
      lineHeight: heights.dropDown.medium + 'px',
      height: heights.dropDown.medium,
      border: 'none',
      outline: 'none',
      padding: 0,
      flex: 1,
    },
  },
  filledInput: {
    border: [spacing.s1, 'solid', colorsStyles['dark_overline']],
  },
  disabled: { backgroundColor: colorsStyles['background_default'] },
  ...styles,
});
