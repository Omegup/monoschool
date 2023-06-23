import { colors } from '@omegup-school/ui-atoms/colors';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { SearchBarProps } from './SearchBar.types';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { shadowXSmall } from '@omegup-school/ui-atoms/effects/shadow';

type Sizes = readonly [
  `$${SearchBarProps['size']}>$container>&`,
  { width: string; height: string }
];
const searchBarSizes = Object.fromEntries<'', Record<'', Sizes>>(
  Object.entries(widths.searchBar).map(([k, v]) => [
    `$${k}>$container>&`,
    {
      width: v,
      height: v,
    },
  ])
);

export const useSearchBarStyles = createUseStyles({
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
  border:colors.background.overlay,
  outline: colors.background.overlay,
  padding:"0",
  margin:"0",
  width:"100%",
  },
  label: {},
  container: {
    display: "flex",
    padding: spacing.s4,
    alignItems: "center",
    gap:spacing.s4,
    borderRadius: borders.r5,
    border: [borders.b2,"solid",colors.background.overlay],
    background: colors.background.default,
    boxShadow: shadowXSmall,
  },
  SearchStatus: {
    ...searchBarSizes
  },
  Close: {
    ...searchBarSizes,
  },
  labelText: {
    ...styles.paragraph_small_regular,
    fontcolor:colors.grey[400],
  },
  
});
