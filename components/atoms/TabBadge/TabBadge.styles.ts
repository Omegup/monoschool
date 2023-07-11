import { colors } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { typography } from '@omegup-school/ui-configs/typography/typography.cnst';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(({ containerStateSelector }: { containerStateSelector: string }) => ({
  selected: {},
  tabNumber: {
    alignItems: 'center',
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    color: colors.grey[500],
    backgroundColor: colors.grey[100],
    paddingInline: spacing.s4,
    borderRadius: borders.r5,
    [`.${containerStateSelector}:hover &`]: {
      color: colors.dark.default,
    },
    '&&$selected': {
      color: colors.blue[500],
      backgroundColor: colors.light[300],
    },
  },
})); 