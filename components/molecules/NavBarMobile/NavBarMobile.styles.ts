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
  input: {
    clip: 'rect(0 0 0 0)',
    position: 'absolute',
  },
 itemMenu:{
  display: 'flex',
  alignItems: 'center',
  color: colors.blue[500],
 },
  container: {
    display: 'flex',
    alignItems: 'center',
    color: colors.dark.default,
    gap: spacing.s8,
    '$medium > &': {
      padding: spacing.s4,
      borderRadius: borders.r5,
    },
  },
  
});
