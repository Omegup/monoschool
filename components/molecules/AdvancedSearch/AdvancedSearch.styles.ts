import { colors } from "@omegup-school/ui-atoms/colors";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  listSearch: {
    '& > div': {
      margin: "10px 0"
    }
  },
  advancedSearchContainer: {
    padding: "10px 0",
    width: 'fit-content',
  },
  switchContainer: {
    padding: "10px 0",
    borderBlock: `1px solid ${colors.background.overlay}`,
  },
  chipsContainer: {
    padding: "10px 0"
  },
});