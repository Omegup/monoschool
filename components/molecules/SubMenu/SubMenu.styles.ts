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

  children: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf:"stretch",
    gap: "15px",
    padding:spacing.s5
  },
  container: {
    display: "inline-flex",
    padding: spacing.s5,
    flexDirection: "column",
     alignItems: 'center',
    gap:spacing.s7,
    borderRadius:borders.r5,
    color:colors.grey[500],
  }
  , parentName: {
    color: colors.grey[300],
    fontSize: "12px",
    fontFamily: "Poppins",
    fontWeight: "700",
    letterSpacing: "0.12px",
    textTransform: "uppercase"
  }

});
