import { colors } from '@omegup-school/ui-configs/colors';
import { shadowSmall } from '@omegup-school/ui-configs/effects/shadow';
import { borders, spacing, widths } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

export const useCardNumberDashboardStyles = createUseStyles({
  container: {
    display: 'flex',
    paddingBlockStart: spacing.s9,
    paddingBlockEnd: spacing.s3,
    width:"100%",
    maxHeight : 118,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.s3,
    borderRadius: borders.r5,
    userSelect: 'none',
    cursor: 'pointer',
    backgroundColor: colors.headline[100],
    transition: 'border-bottom-color 800ms ease',
    borderBottom: [borders.b11,"solid","transparent"],
    boxShadow:shadowSmall,
    boxSizing:"border-box",
  },
  blue: {
    backgroundColor: colors.blue[500],
    color: colors.blue[100],
    '&:hover': {
      borderBottomColor: colors.headline[500],
    },
  },
  headLine: {
    backgroundColor: colors.headline[500],
    color: colors.headline[100],
    '&:hover': {
      borderBottomColor: colors.headline[100],
    },
  },
  light: {
    backgroundColor: colors.light[500],
    color: colors.blue[500],
    '&:hover ': {
      borderBottomColor: colors.blue[500],
    },
  },
  childrenContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: spacing.s3,
    '& svg':{
        width:widths.itemCardNumberDashboard.icon,
        height:widths.itemCardNumberDashboard.icon,
    }
  },
  
});
