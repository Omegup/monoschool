import { colors } from "@omegup-school/ui-atoms/colors";
import { typography } from "@omegup-school/ui-atoms/typography";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  chipContainer : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem',
    width: 'fit-content',
    backgroundColor: colors.blue[500],
    border: '3px solid' + colors.blue[500],
    cursor: 'pointer',
  },
  parent : {
    backgroundColor: colors.blue[500],
    padding: '0 5px',
    height: '100%',
    fontSize : typography.paragraph.xSmall.regular.fontSize,
    fontWeight : typography.paragraph.xSmall.regular.fontWeight,
    color : colors.light[100],
  },
  labelContainer : {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.blue[100],
  },
  label : {
    padding: '0 5px',
    backgroundColor: colors.blue[100],
    fontSize : typography.paragraph.xSmall.regular.fontSize,
    fontWeight : typography.paragraph.xSmall.regular.fontWeight,
  },

})