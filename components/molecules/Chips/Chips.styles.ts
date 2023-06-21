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
    borderRadius: '5px',
    border: '1px solid' + colors.blue[500],
    cursor: 'default',

  },

  avatar : {
    width: '18px',
    height: '18px',
    backgroundColor: colors.pink[200],
    color: colors.pink[200],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },

  cancelIcon : {
    width: '18px',
    height: '18px',
    // backgroundColor: colors.pink[400],
    // color: colors.pink[400],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    marginLeft: '10px',
    cursor: 'default',
    '&:hover': {
      backgroundColor: colors.blue[500],
      color: colors.blue[500],
    }
  },

  parent: {
    backgroundColor: colors.blue[500],
    padding: '5px',
    height: '100%',
    fontSize : typography.paragraph.xSmall.regular.fontSize,
    fontWeight : typography.paragraph.xSmall.regular.fontWeight,
    color : colors.light[100],
  },
<<<<<<< HEAD
  labelContainer : {
=======

  labelContainer: {
    padding: '5px',
>>>>>>> 3b264d0 (fix chips syling)
    display: 'flex',
    flexDirection: 'row',
<<<<<<< HEAD
    backgroundColor: colors.blue[100],
  },
  label : {
    padding: '0 5px',
    backgroundColor: colors.blue[100],
    fontSize : typography.paragraph.xSmall.regular.fontSize,
    fontWeight : typography.paragraph.xSmall.regular.fontWeight,
=======
    backgroundColor: colors.light[100],
    borderRadius:' 0 5px 5px 0'
  },

  label: {
    padding: '5px',
    backgroundColor: colors.light[100],
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
>>>>>>> 3b264d0 (fix chips syling)
  },

})