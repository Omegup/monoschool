import { colors } from "@omegup-school/ui-atoms/colors";
import { typography } from "@omegup-school/ui-atoms/typography";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  cellContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'default'
  },
  cellLabel: {
    fontSize: typography.paragraph.overline.small.fontSize,
    fontWeight: typography.paragraph.overline.small.fontWeight,
    textTransform: 'uppercase',
    color: colors.headline[500],
    marginRight: 13,
  },
  cellSort: {},
  cellSortIcon: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
});