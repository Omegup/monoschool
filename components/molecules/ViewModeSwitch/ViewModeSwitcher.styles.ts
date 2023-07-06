import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { ViewModeSwitcherProps } from './ViewModeSwitcher.types';
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
  checked: {

    backgroundColor: colors.blue[500],
    color: colors.light[300],
    cursor: "default",
    '&> $input': {
      cursor: "default"
    },
  },
  notChecked: {
   backgroundColor: colors.light[300],
    color: colors.blue[500],
    cursor: "pointer",
    '&> $input': {
      cursor: "pointer"
    },
    '&:hover': {
      backgroundColor: colors.light[500]
    },

  },
  input: {
    position: "absolute",
    opacity: 0,
  },
  checkmark: {
    position: "absolute",
  },
  container: {
    justifyContent: "right",
    display: "inline-flex",
    alignItems: "flex-start",
    borderRadius: "10px",
    background: "var(--background-background, #FFFFFE)",
    boxShadow: "0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",


  }
  ,
  elementLeft: {
    borderRadius: "10px 0px 0px 10px",
  },
  elementRight: {
    borderRadius: "0px 10px 10px 0px",
  },
  element: {
    display: "flex",
    padding: "6px 7px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    transition: "background-color 700ms ease",
    "&:after": {
      //   transition:  "right 500ms ease, \n          background-color 500ms ease, \n          box-shadow 500ms ease"
    }, 
    '&:focus': {
      outline: 'none'
    },

  }
});
