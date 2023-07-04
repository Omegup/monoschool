import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { ViewModeSwitcherProps } from './ViewModeSwitcher.types';

type Sizes = readonly [
  `$${ViewModeSwitcherProps['size']}>$container>&`,
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

export const useViewModeSwitcherStyles = createUseStyles({
  solid: {},
  border: {},
  flat: {},
  text: {},
  large: {},
  medium: {},
  small: {},
  disabled: {},
  enabled: {},
  checked:{
    borderRadius: borders.r5,
    backgroundColor: colors.blue[500],
    color:colors.light[300],
    cursor: "default",
    display: "flex",
    padding: "6px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  notChecked:{
    borderRadius: borders.r5,
    backgroundColor: colors.light[300],
    color:colors.blue[500],
    cursor: "pointer",
    display: "flex",
    padding: "6px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  input: {
   
   position: "absolute",
    opacity: 0,
    '&>*:checked ':{
      cursor:"default"
    },
    '&>*:not(:checked)':{
      cursor:"pointer"
    }
     
  },
  checkmark: {
    position: "absolute",

  },
  container: {
    display: "flex",
    justifyContent: "right",
  }
  ,
  elementLeft: {
    borderRadius: "10px 0px 0px 10px",
  },
  elementRight: {
    
    borderRadius: "0px 10px 10px 0px",
  },
  element:{
    display: "flex",
    padding: "6px 7px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    '&:focus': {
      outline: 'none'
    },
    '&hover':{
      cursor: "pointer",
    },
    '&active': {
      color:colors.blue[500],
      opacity: 0,
    },  
    '&>*:checked ':{
      cursor:"default"
    },
    '&>*:not(:checked)':{
      cursor:"pointer"
    }
  }


});
