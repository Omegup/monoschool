import { colors } from "@omegup-school/ui-atoms/colors";
import { createUseStyles } from "react-jss";

export const useTableLineStyles = createUseStyles({
  tableLine: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.background.overlay,
      '&:hover': {
        backgroundColor: colors.light[100],
      },
  },
  tableLineSelected: {
    backgroundColor: colors.light[300],
    '&:hover': {
      backgroundColor: colors.light[300],
    },
  },
  tableLineFullWidth: {
    width: "100%",
  },
});