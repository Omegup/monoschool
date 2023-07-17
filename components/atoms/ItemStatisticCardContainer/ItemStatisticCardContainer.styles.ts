import { colors } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

export const useItemStatisticCardContainerStyles = createUseStyles({
  container: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: spacing.s5,
    gap: spacing.s2,
    width: '100%',
    borderRadius:borders.r5,
  },
  childContainer: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  success: {
    backgroundColor:colors.success[500],
    color:colors.success[900],
  },
  blue: {
    backgroundColor:colors.blue[500],
    color:colors.blue[900],
  },
  warning: {
    backgroundColor:colors.warning[300],
    color:colors.warning[900],
  },
  pink: {backgroundColor:colors.pink[500],
    color:colors.pink[900],},
});
