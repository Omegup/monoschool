import { colors } from '@omegup-school/ui-atoms/colors';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { FilterProps } from './Filter.types';

type Sizes = readonly [
  `$${FilterProps['size']}>$container>&`,
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
  input: {
  border:colors.background.overlay,
  outline: colors.background.overlay,
  width:"100%",
  },
  
  label: {},
  container: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "10px",
  },
  SearchStatus: {
    ...searchBarSizes,
  },
  Close: {
    ...searchBarSizes,
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
  square: {},
});
