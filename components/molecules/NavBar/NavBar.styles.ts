import { colors } from '@omegup-school/ui-configs/colors';
import { typoStyles } from "@omegup-school/ui-configs/typography";

import { createUseStyles } from "react-jss";

export const useNavbarStyle = createUseStyles({
  navbarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbarSearch: {},
  navbarLabel: {
    ...typoStyles.paragraph_medium_regular,
    color: colors.grey[500],
  },
  navbarMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },
  navbarItem: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "end",
    padding: '10px',

    '&>svg': {
      marginRight: "15px",
      color: colors.grey[500],
      stroke: colors.grey[500],
    }
  },

})