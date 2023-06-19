import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
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
  borderRadius: "10px",
  width:"100%",
  padding: "9px 4px 9px 40px",
  },
  
  label: {},
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding:spacing.s2
    
  },
  SearchStatus: {
    ...searchBarSizes,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "20px",

  },
  Close: {
    ...searchBarSizes,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "20px",
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
  square: {},
});
