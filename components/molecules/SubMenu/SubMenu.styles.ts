import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { SubMenuProps } from './SubMenu.types';

type Sizes = readonly [
  `$${SubMenuProps['size']}>$container>&`,
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

  selected: {
    borderRadius: borders.r5,
    backgroundColor: colors.blue[500],
    '&:hover >$items': {

      borderRadius: borders.r5,
      backgroundColor: colors.light[500],
      cursor: "pointer",
    },
  },
  notSelected: {
    '&:hover >$items': {

      borderRadius: borders.r5,
      backgroundColor: colors.light[500],
      cursor: "pointer",
    },

  },
  mobile: {},
  itemsList: {
    display: "flex",
    flexDirection: 'column',
    gap:5
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  }
  , parentName: {
    color: colors.grey[300],
    fontSize: spacing.s6,
    fontWeight: "700",
    letterSpacing: "0.12px",
    textTransform: "uppercase",
    display: "flex",
    padding: "0px 20px",
    alignItems: "flex-start",
    gap: spacing.s5
  }
});
