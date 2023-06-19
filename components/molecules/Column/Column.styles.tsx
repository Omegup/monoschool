import { colors } from "@omegup-school/ui-atoms/colors";
import { borders, spacing } from "@omegup-school/ui-atoms/sizes";
import { createUseStyles } from "react-jss";
import { styles } from "../common/styles";

export const useColumnStyles = createUseStyles({
  columnContainer: {
    paddingBlock : spacing.s5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  startAdornment: {
    paddingLeft: spacing.s5
  },
  endAdornment: {
    paddingRight: spacing.s5
  },
  cellContainer: {
    paddingInline: spacing.s5
  },
  cellText: {
    color: colors.dark,
    ...styles.paragraph_xSmall_regular,
  },
});