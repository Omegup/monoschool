import { colors } from "@omegup-school/ui-atoms/colors";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  switchContainer: {
    position: 'relative',
    display: 'inline-block',
    width: '60px',
    height: '34px',
  },
  switchInput: {
    opacity: 0,
    width: 0,
    height: 0,

    '$switchSlider': {
      backgroundColor: colors.light[500],
    },
    '$switchSlider &:before': {
      transform: 'translateX(26px)',
    },

    '&:checked': {
      transform: "translateX(26px)"
    }
  },
  switchSlider: {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.light[500],
    transition: '.4s',
    borderRadius: '34px',

    '&:before': {
      position: 'absolute',
      content: '""',
      height: '26px',
      width: '26px',
      left: '4px',
      bottom: '4px',
      backgroundColor: colors.blue[500],
      transition: '.4s',
      borderRadius: '50%',
    },

    '&:checked': {
      backgroundColor: '#2196F3',
    }
  },
});