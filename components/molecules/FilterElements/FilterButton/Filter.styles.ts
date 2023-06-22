import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../../common/styles';
import { FilterProps } from './Filter.types';


type Sizes = readonly [
  `$${FilterProps['size']}>$button>&`,
  { width: string; height: string }
];
const buttonSizes = Object.fromEntries<'', Record<'', Sizes>>(
  Object.entries(widths.filter).map(([k, v]) => [
    `$${k}>$button>&`,
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
    margin:0,
    width:"100%",
    borderRadius: borders.r5,
    border: 'none',
    outline: 'none',
    display: 'flex',
    padding:spacing.s4,
    alignItems: 'flex-start',
    color: colors.grey[400],
    backgroundColor:colors.background.default,
    gap:spacing.s4,
    cursor: 'pointer',
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
  },
  container: {
  },
  labelText: {
    textAlign:"left",
    width:"100%"
  },
  square: {},
});

