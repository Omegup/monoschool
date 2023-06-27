import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { HeaderSideBarProps } from './HeaderSideBar.types';

type Sizes = readonly [
  `$${HeaderSideBarProps['size']}>$container>&`,
  { width: string; height: string }
];
const HeaderSideBarSizes = Object.fromEntries<'', Record<'', Sizes>>(
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
  input: {},
  label: {},
  tick: {},
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: spacing.s3,
    color:colors.grey[500],
  },
  logo: {
    display: 'flex',
    padding: ['0px ',borders.b4],
    alignItems: 'center',
    gap: spacing.s8,
    alignSelf: 'stretch',
  },icon:{
    width:widths.logo.svg
  },
  labelText: {
    ...styles.paragraph_medium_semiBold
  
  },
  square: {},
});
