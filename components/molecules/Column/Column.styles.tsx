import { colors } from "@omegup-school/ui-atoms/colors";
import { spacing } from "@omegup-school/ui-atoms/sizes";
import { createUseStyles } from "react-jss";
import { styles } from "../common/styles";

export const useColumnStyles = createUseStyles({
  columnContainer: {
    padding: spacing.s5,
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing.s5,
    ...styles.paragraph_xSmall_regular,
    '& > *': {
      padding: '0px',
      margin: '0px',
    },
  },
  cellText: {
    color: colors.dark,
  },
});