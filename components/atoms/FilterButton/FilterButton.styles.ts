import { createUseStyles } from 'react-jss';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { colors } from '@omegup-school/ui-configs/colors';

export const useContainerStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.s4,
    padding: spacing.s4,
    justifyContent: 'space-between',
    backgroundColor: colors.background.default,
    borderRadius: borders.r5,
    color: colors.grey[400],
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: colors.light[300],
      color: colors.blue[500],
    },
    width:"-webkit-fill-available",
    
   
  },
  selected: {
    backgroundColor: colors.light[300],
    color: colors.blue[500],
  },
});
