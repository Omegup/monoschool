import { colors } from "@omegup-school/ui-atoms/colors";
import { typography } from "@omegup-school/ui-atoms/typography";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  toggleSwitch: {
    position: 'relative',
    display: 'inline-block',
    width: '50px',
    height: '25px',
  },
  label: {
    display: 'inline-block',
    marginLeft: '10px',
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    color: colors.grey[500],
    cursor: 'default',

    '&:hover': {
      color: colors.blue[600],
    }
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
    left: '2px',
    top: '2px',
    width: '21px',
    height: '21px',
    backgroundColor: colors.blue[500],
    borderRadius: '50%',
    transition: 'transform 0.3s ease',
  },
  switchChecked: {
    transform: 'translateX(25px)',
    backgroundColor: colors.light[500],
  },
  labelChecked: {
    color: colors.blue[500],
  },
  switchCheckedBg: {
    backgroundColor: colors.blue[500],
  },
});