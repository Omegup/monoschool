
import { colors } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { typography } from '@omegup-school/ui-configs/typography/typography.cnst';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  label: {
    backgroundColor: colors.blue[500],
    padding: spacing.s3,
    height: '100%',
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    color: colors.light[100],
    borderRadius: `${borders.b5}px 0 0 ${borders.b5}px`,
  },
});