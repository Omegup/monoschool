import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../../common/styles';
import { FilterProps } from './FilterListeCheckBox.types';
import { shadowMedium } from '@omegup-school/ui-atoms/effects/shadow';


type Sizes = readonly [
  `$${FilterProps['size']}>$container>&`,
  { width: string; height: string }
];
const buttonSizes = Object.fromEntries<'', Record<'', Sizes>>(
  Object.entries(widths.filter).map(([k, v]) => [
    `$${k}>$container>&`,
    {
      width: v,
      height: v,
    },
  ])
);

export const useFilterListeCheckBoxStyles = createUseStyles({
  solid: {},
  border: {},
  flat: {},
  text: {},
  large: {},
  medium: {},
  small: {},
  disabled: {},
  enabled: {},
  container: {
    display: "inline-flex",
    padding: spacing.s5,
    flexDirection: "column",
    alignItems: "flex-start",

    borderRadius: spacing.s5,
border: [borders.b2, "solid" ,colors.background.overlay],
background: colors.background.default,

boxShadow:shadowMedium,
  },
});
