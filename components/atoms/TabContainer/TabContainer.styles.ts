import { colors } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  selected: {
    borderBlockEnd: `${borders.b2}px solid ${colors.blue[500]} `,
  },
  topSearchContainer: {
    display: 'flex',
    borderBottom: `${borders.b2}px solid ${colors.background.overlay}`,
    '&:hover': {
      cursor: 'pointer',
      borderBottom: `${borders.b2}px solid ${colors.dark.default}`,
    },
    '&$selected': {
      borderBlockEnd: `${borders.b2}px solid ${colors.blue[500]} `,
    }
  },
  tabSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    width: 'fit-content',
    height: '100%',
    cursor: 'pointer',
    paddingInline: spacing.s4,
    paddingInlineEnd: spacing.s2,
  },
});