import { colors } from "@omegup-school/ui-atoms/colors";
import { typography } from "@omegup-school/ui-atoms/typography";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  chipContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    backgroundColor: colors.blue[500],
    borderRadius: '10px',
    border: '2px solid' + colors.blue[500],
    cursor: 'pointer',
  },
  avatar : {
    width: '20px',
    height: '20px',
    backgroundColor: colors.pink[200],
    color: colors.pink[200],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  cancelIcon : {
    width: '20px',
    height: '20px',
    // backgroundColor: colors.pink[400],
    // color: colors.pink[400],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: colors.blue[500],
      color: colors.blue[500],
    }

  },
  parent: {
    backgroundColor: colors.blue[500],
    padding: '0 5px',
    height: '100%',
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    color: colors.light[100],
  },
  labelContainer: {
    padding: '0 5px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.light[100],
    borderRadius:' 0 10px 10px 0'
  },
  label: {
    padding: '0 5px',
    backgroundColor: colors.light[100],
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
  },

})