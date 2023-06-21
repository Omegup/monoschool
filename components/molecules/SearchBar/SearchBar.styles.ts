import { colors } from '@omegup-school/ui-atoms/colors';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { SearchBarProps } from './SearchBar.types';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';

type Sizes = readonly [
  `$${SearchBarProps['size']}>$container>&`,
  { width: string; height: string }
];
const searchBarSizes = Object.fromEntries<'', Record<'', Sizes>>(
  Object.entries(widths.filter).map(([k, v]) => [
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
  width:"100%",
  padding:[spacing.s4,0]
  },
  
  label: {},
  container: {
    display: "flex",
    justifyContent: "center",
    border:["solid",borders.b2],
    borderColor:colors.background.overlay,
    borderRadius: "10px",
    gap:spacing.s5,
    
  },
  SearchStatus: {
    ...searchBarSizes,
    margin:[spacing.s4,0,spacing.s4,spacing.s4]
  },
  Close: {
    ...searchBarSizes,
    margin:[spacing.s4,0,spacing.s4,spacing.s4]
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
  square: {},
});
