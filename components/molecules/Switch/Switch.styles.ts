import { colors } from '@omegup-school/ui-configs/colors';
import { shadowMedium } from "@omegup-school/ui-configs/effects/shadow";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  toggleSwitch: {
    position: 'relative',
    display: 'inline-block',
    width: '50px',
    height: '25px',
    boxShadow: shadowMedium,
    borderRadius: '15px',
    border: '1px solid ' + colors.light[500],
  },
  switch: {
    position: 'absolute',
    cursor: 'pointer',
    backgroundColor: colors.light[500],
    borderRadius: '25px',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    transition: 'background-color 0.2s ease',
  },
  switchBefore: {
    position: 'absolute',
    content: '""',
    top: '3px',
    left: '5px',
    width: '19px',
    height: '19px',
    backgroundColor: colors.blue[500],
    borderRadius: '50%',
    transition: 'transform 0.3s ease',
  },
  switchChecked: {
    transform: 'translateX(21px)',
    backgroundColor: colors.light[500],
  },
  switchCheckedBg: {
    backgroundColor: colors.blue[500],
  },
});