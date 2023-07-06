import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { typography } from '@omegup-school/ui-atoms/typography';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  topSearchContainer: {
    display: 'flex',
    marginInline: spacing.s4,
  },

  selected: {
    borderBottom: `${borders.b2}px solid ${colors.blue[500]} !important`,
    '& $tabText': {
      color: colors.blue[500],
    },
    '& $tabNumber': {
      color: colors.blue[500],
      backgroundColor: `${colors.light[300]}`,
    },
    '&:hover': {
      cursor: 'default',
      borderBottom: `${borders.b2}px solid ${colors.blue[500]}`,
      '& $tabText': {
        color: colors.blue[500],
      },
      '& $tabNumber': {
        color: colors.blue[500],
        backgroundColor: `${colors.light[300]}`,
      },
    },
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
  },

  tabText: {
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    color: `${colors.grey[500]}`,
    marginBottom: spacing.s5,
    paddingInline: spacing.s2,
  },

  tabNumber: {
    alignItems: 'center',
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    color: `${colors.grey[500]}`,
    backgroundColor: `${colors.grey[100]}`,
    paddingInlineEnd: spacing.s4,
    borderRadius: borders.r5,
  },
});
