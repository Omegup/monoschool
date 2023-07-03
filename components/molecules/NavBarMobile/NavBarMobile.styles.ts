import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { NavBarMobileProps } from './NavBarMobile.types';

type Sizes = readonly [
  `$${NavBarMobileProps['size']}>$container>&`,
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

export const useNavBarMobileStyles = createUseStyles({
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
  },
  notSelected: {},
  itemMenu: {
    display: "flex",
    width: "85px",
    padding: "5px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    flexShrink: 0,

    '&$selected': {
      backgroundColor: colors.danger[500],
      cursor: "pointer",
    },
  },
  container: {
    display: "flex",
    width: "399px",
    justifyContent: "center",
    alignItems: "center",
    gap: '19.5px',
    borderRadius: spacing.s5,
    background: colors.blue[500],
    '$medium > &': {
      borderRadius: borders.r5,
    },

  },

});
