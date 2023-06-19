import { colors } from "@omegup-school/ui-atoms/colors";
import { typography } from "@omegup-school/ui-atoms/typography";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  topSearchContainer: {
    display: 'flex',
  },

  selected: {
    borderBottom: `1px solid ${colors.blue[500]}`,

    '& $tabText': {
      color: colors.blue[500],
    },

    '& $tabNumber': {
      color: colors.blue[500],
    },
    
    '&:hover': {
      cursor: 'pointer',
      borderBottom: `1px solid ${colors.dark.default}`,

      '& $tabText': {
        color: colors.dark.default,
      },

      '& $tabNumber': {
        color: colors.dark.default,
      },
    }
  },

  tabSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    cursor: 'pointer',

    '&:hover': {
      cursor: 'pointer',
      borderBottom: `1px solid ${colors.dark.default}`,

      '& $tabText': {
        color: colors.dark.default,
      },

      '& $tabNumber': {
        color: colors.dark.default,
      },
    }
  },

  tabText: {
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    color: `${colors.grey[500]}`,
    marginBottom: '10px',
  },

  tabNumber: {
    alignItems: 'center',
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    color: `${colors.grey[500]}`,
    backgroundColor: `${colors.grey[100]}`,
    padding: '5px 10px',
    borderRadius: '40%',
  }

});