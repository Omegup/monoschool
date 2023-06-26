import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../../common/styles';
import { FilterMenuProps } from './FilterMenu.types';
import { shadowMedium, shadowXSmall } from '@omegup-school/ui-atoms/effects/shadow';

type Sizes = readonly [
  `$${FilterMenuProps['size']}>$container>&`,
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

export const useFilterStyles = createUseStyles({
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
    width:"fit-content",
    padding: spacing.s5,
    flexDirection: "column",
    gap: spacing.s3,
    borderRadius: borders.r5,
    border: [borders.b2, "solid", colors.background.overlay],
    background: colors.background.default,
    boxShadow: shadowXSmall,
  },
  
  line: {
    margin:"5px",
    border: [borders.b1,"solid"],
    borderColor:colors.background.overlay
  },
    
    
});
