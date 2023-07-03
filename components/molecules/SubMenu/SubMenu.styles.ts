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
const checkboxSizes = Object.fromEntries<'', Record<'', Sizes>>(
  Object.entries(widths.checkbox).map(([k, v]) => [
    `$${k}>$container>&`,
    {
      width: v,
      height: v,
    },
  ])
);

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
  selected:{
    borderRadius: borders.r5,
    backgroundColor: colors.blue[500],
  },
  notSelected:{},
  items: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    padding: spacing.s5,
    gap: spacing.s8, 
    margin:spacing.s1,
    '&:hover': {
      borderRadius: borders.r5,
      backgroundColor: colors.light[500],
      cursor: "pointer",
    },
  
    '&:active': {
      '&:hover > $items': {
        borderRadius: borders.r5,
        backgroundColor: colors.blue[500],
      }
    }
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  }
  , parentName: {
    color: colors.grey[300],
    fontSize: "12px",

    fontWeight: "700",
    letterSpacing: "0.12px",
    textTransform: "uppercase",
    display: "flex",
    padding: "0px 20px",
    alignItems: "flex-start",
    gap: "10px"
  }
});
