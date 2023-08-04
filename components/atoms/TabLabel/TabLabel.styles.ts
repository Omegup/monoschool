import { colors } from '@omegup-school/ui-configs/colors';
import { spacing } from '@omegup-school/ui-configs/sizes';
import { typography } from '@omegup-school/ui-configs/typography/typography.cnst';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ containerStateSelector }: { containerStateSelector: string }) => ({
    selected: {},
    tabText: {
      fontSize: typography.paragraph.xSmall.regular.fontSize,
      fontWeight: typography.paragraph.xSmall.regular.fontWeight,
      color: colors.grey[500],
      marginBottom: spacing.s5,
      paddingInline: spacing.s2,
      [`.${containerStateSelector}:hover &`]: {
        color: colors.dark.default,
      },
      '&&$selected': {
        color: colors.blue[500],
      },
    },
  })
);
