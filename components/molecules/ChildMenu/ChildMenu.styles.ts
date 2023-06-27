import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { ChildMenuProps } from './ChildMenu.types';

type Sizes = readonly [
  `$${ChildMenuProps['size']}>$container>&`,
  { width: string; height: string }
];


export const useSelectStyles = createUseStyles({
  solid: {},
  border: {},
  flat: {},
  text: {},
  large: {},
  medium: {},
  small: {},
  disabled: {},
  enabled: {},
  icon: {
    width: "24px",
    height: "24px",
    '&:hover': {
      borderRadius:borders.r5,
    backgroundColor:colors.light[500]   ,
    cursor:"pointer",
   },
  },
  label: {
    color: colors.grey[500],
    fontSize: "16px",
    '&:hover': {
      borderRadius:borders.r5,
    backgroundColor:colors.light[500]   ,
    color:colors.danger,
    cursor:"pointer",
   },
  },
  container: {
    display: "flex",
    padding: spacing.s5,
    alignItems: "center",
    alignSelf: "stretch",
    gap: "15px",
    color:colors.danger,
    '&:hover': {
      borderRadius:borders.r5,
    backgroundColor:colors.light[500]   ,
    cursor:"pointer",
   },
  }

}
);
