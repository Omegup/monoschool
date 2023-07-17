import { colors } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

export const useNowadayStatisticContainerStyles = createUseStyles({
  container: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: spacing.s5,
    width: '100%',
    borderRadius:borders.r5,
    backgroundColor:colors.blue[100],
  },
  childContainer: {
    display:'flex',
    flexDirection:'column',

    width: '100%',
  },
  

});
