import { colors } from '@omegup-school/ui-configs/colors';
import { spacing } from '@omegup-school/ui-configs/sizes';
import { typography } from '@omegup-school/ui-configs/typography/typography.cnst';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  chipsPersonContainer: {
    display: 'flex',
    paddingBlock: spacing.s3,
  },
  avatar: {
    backgroundColor: colors.pink[200],
    color: colors.pink[200],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  cancelIcon: {

    display: 'flex',
    borderRadius: '50%',
    cursor: 'pointer',
    margin: spacing.s3,

    '&:hover': {
      backgroundColor: colors.blue[500],
      color: colors.blue[500],
      '&>svg>path': {
        stroke: colors.light[500],
        fill: colors.light[500],
      }
    },
    '&>svg>path': {
      stroke: colors.dark.default,
    }
  },
  label: {
    margin: `${spacing.s3}px 0 ${spacing.s3}px ${spacing.s2}px`,
    backgroundColor: colors.light[100],
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
  },
  labelSeparator: {
    padding: spacing.s3,
    backgroundColor: colors.light[100],
    fontSize: typography.paragraph.xSmall.regular.fontSize,
    fontWeight: typography.paragraph.xSmall.regular.fontWeight,
  },
  container : {
    backgroundColor: colors.light[100],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  nameContainer: {
    paddingInline: spacing.s3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});