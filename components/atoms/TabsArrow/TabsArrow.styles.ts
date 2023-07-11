
import { colors } from "@omegup-school/ui-configs/colors";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  tabsActionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    cursor: 'pointer',
    '&>div>svg>path': {
      fill: colors.blue[500],
      stroke: colors.light[500],
    }
  },

});