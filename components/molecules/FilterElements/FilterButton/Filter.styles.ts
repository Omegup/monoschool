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
    height:"36px",
    borderRadius: borders.r5,
    border: 'none',
    outline: 'none',
    padding:0,
    display: 'flex',
    alignItems: 'center',
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
    fill : colors.grey[400],
    margin:spacing.s4,
    padding:spacing.s2,
    width:widths.icon.svg,
    height:widths.icon.svg,
  },
  container: {
  },
  labelText: {
    ...styles.paragraph_small_regular,
    minWidth:"100px",
    minHeight:"18px",
    margin:spacing.s4,
    padding:[spacing.s4,spacing.s4,spacing.s5,0],
    textAlign:"left"
    
   
  },
  square: {},
});

