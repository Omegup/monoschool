import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../../common/styles';
import { FilterProps } from './Filter.types';


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
  button: {
    borderRadius: borders.r5,
    border: 'none',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.grey[400],
    backgroundColor:"white",
    cursor: 'pointer',
    '& $arrow': {
      ...buttonSizes,
    },
    '&:active, &:focus, &:hover': {
      backgroundColor: colors.light[300],
      color: colors.blue[500],
      '& $arrow': {
        fill : colors.blue[500],
      }
    },
    '&:active:hover, &:focus:hover': {
      backgroundColor: colors.light[300],
      color: colors.blue[500],
    },
  },
  arrow:{
    ...buttonSizes,
    fill : colors.grey[400],
  },
  container: {
    
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
  square: {},
});
