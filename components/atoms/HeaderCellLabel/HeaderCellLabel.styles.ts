import { colors } from "@omegup-school/ui-configs/colors";
import { typography } from "@omegup-school/ui-configs/typography/typography.cnst";
import { createUseStyles } from "react-jss";


export const useStyles = createUseStyles({
    cellLabel: {
    fontSize: typography.paragraph.overline.small.fontSize,
    fontWeight: typography.paragraph.overline.small.fontWeight,
    textTransform: 'uppercase',
    color: colors.headline[500],
    marginRight: 13,
  },
});