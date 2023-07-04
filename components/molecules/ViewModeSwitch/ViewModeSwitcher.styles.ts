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
  input: {
    position: "absolute",
    opacity: 0,
    cursor: "pointer",
  },
 
  checkmark: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "25px",
    width: "25px",
    backgroundColor: "#eee",
    borderRadius: "50%",
  },
  
  container:  {
    padding:5,
    display: "inline-flex",
    alignItems: "flex-start",
    borderRadius:"10px ",
    background: "var(--background-background, #F55FFE)",
    boxShadow:
      "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)"
  }
  ,
  elementLeft:{
    display: "flex",
    padding: "6px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    // borderRadius: "10px 0px 0px 10px",
    background: "var(--blue-blue, #3DA9FC)"
  },
  elementRight:{
    display: "flex",
    padding: "6px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    // borderRadius: "10px 0px 0px 10px",
    background: "var(--blue-blue, #3DA9FC)"
  },
 

});
