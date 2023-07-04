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
  },
  notChecked:{},
  input: {
    position: "absolute",
    opacity: 0,
    cursor: "pointer",
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
    display: "flex",
    padding: "6px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "10px 0px 0px 10px",
    background: "var(--blue-blue, #3DA9FC)",
    '&:focus': {
      outline: 'none'
    },
    '&hover':{
      cursor: "pointer",
    }
  },
  elementRight: {
    display: "flex",
    padding: "6px 7px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "0px 10px 10px 0px",
    background: "var(--light-300, #E7F7FE)",
    '&:focus': {
      outline: 'none'
    },
    '&hover':{
      cursor: "pointer",
    },
    '& $': {
      opacity: 0,
    },
  },


});
