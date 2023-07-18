import { colors } from "@omegup-school/ui-configs/colors";
import { borders, spacing } from "@omegup-school/ui-configs/sizes";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    '&>div:first-child': {
      borderRadius: `${borders.r5}px ${borders.r5}px 0 0`,
    },
    '&>div:last-child': {
      borderRadius: `0 0 ${borders.r5}px ${borders.r5}px`,
    }
  },
  topBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    // height: '60px',
    backgroundColor: colors.blue[500],
  },
  subContainerTopBar: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  textTop: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '17px',
    color: colors.blue[100],
    paddingInline: spacing.s5,
  },
})