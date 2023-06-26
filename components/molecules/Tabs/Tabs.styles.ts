import { colors } from "@omegup-school/ui-atoms/colors";
import { borders } from "@omegup-school/ui-atoms/sizes";
import { typography } from "@omegup-school/ui-atoms/typography";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  tabsContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
    width: 'fit-content',
    cursor: 'pointer',

    '&>svg>path': {
      width: '20px',
      height: '20px',
    },

    '&:hover': {
      '&>tabLabel' : {
        fontSize: typography.paragraph.medium.semiBold.fontSize,
        fontWeight: typography.paragraph.medium.semiBold.fontWeight,
        color : colors.grey[500]
      }
    }
  },
  tabSelected: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    width: 'fit-content',
    cursor: 'default',
    borderRadius : borders.r5,
    borderBottom: `5px solid ${colors.blue[500]}`,

    '&>svg>path': {
      width: '20px',
      height: '20px',
    },

    '&>$tabLabel' : {
      fontSize: typography.paragraph.medium.semiBold.fontSize,
      fontWeight: typography.paragraph.medium.semiBold.fontWeight,
      color : colors.dark.default
    }
  },

  tabLabel: {
    fontSize: typography.paragraph.medium.regular.fontSize,
    fontWeight: typography.paragraph.medium.regular.fontWeight,
    color : colors.grey[500],
    paddingLeft: '12px'
  },

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

})