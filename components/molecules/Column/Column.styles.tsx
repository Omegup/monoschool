import { colors } from "@omegup-school/ui-atoms/colors";
import { borders, spacing } from "@omegup-school/ui-atoms/sizes";
import { createUseStyles } from "react-jss";
import { styles } from "../common/styles";

export const useColumnStyles = createUseStyles({
  columnContainer: {
    padding: spacing.s5,
    display: "grid",
    placeItems: "center",
    whiteSpace: 'nowrap',
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