import { colors } from "@omegup-school/ui-atoms/colors";
import { typography } from "@omegup-school/ui-atoms/typography";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  containerSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '10px',
  },
  iconSearch: {
    width: '33px',
    height: '33px',
    backgroundColor: colors.pink[200],
    color: colors.pink[200],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  nameSearch: {
    margin: 0,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    fontSize: typography.paragraph.xSmall.regular.fontSize,
  },
  descriptionSearch: {
    margin: 0,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    fontSize: typography.paragraph.xSmall.regular.fontSize,    
    color : colors.grey[500]
  },
});