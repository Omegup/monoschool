import { colors } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  topSearchContainer: {
    display: 'flex',
    marginInline: spacing.s4,
  },
  selected: {
  },
  tabSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    width: 'fit-content',
    height: '100%',
    cursor: 'pointer',
    paddingInlineEnd: spacing.s2,
    borderBottom: `${borders.b2}px solid ${colors.background.overlay}`,

    '&:hover': {
      cursor: 'pointer',
      borderBottom: `${borders.b2}px solid ${colors.dark.default}`,

      '& $tabText': {
        color: colors.dark.default,
      },

      '& $tabNumber': {
        color: colors.dark.default,
      },
    },
    '&$selected': {
      borderBlockEnd: `${borders.b2}px solid ${colors.blue[500]} `,
      '& $tabText': {
        color: colors.blue[500],
      },
      '& $tabNumber': {
        color: colors.blue[500],
        backgroundColor: `${colors.light[300]}`,
      },
      '&:hover': {
        cursor: 'default',
        borderBlockEnd: `${borders.b2}px solid ${colors.blue[500]}`,
        '&& $tabText': {
          color: colors.blue[500],
        },
        '&& $tabNumber': {
          color: colors.blue[500],
          backgroundColor: `${colors.light[300]}`,
        },
      },
    }
  },
});