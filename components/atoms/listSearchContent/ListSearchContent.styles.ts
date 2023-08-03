
import { colors } from '@omegup-school/ui-configs/colors';
import { spacing } from '@omegup-school/ui-configs/sizes';
import { typography } from '@omegup-school/ui-configs/typography/typography.cnst';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  containerSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
  },
  search: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingInlineStart: spacing.s5,
  },
  iconSearch: {
     backgroundColor: colors.pink[200],
    color: colors.pink[200],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  nameSearch: {
    margin: 0,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    fontSize: typography.paragraph.xSmall.regular.fontSize,
  },
  descriptionSearch: {
    margin: 0,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    color: colors.grey[500]
  },
});