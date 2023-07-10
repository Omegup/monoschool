import { createUseStyles } from 'react-jss';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { shadowXSmall } from '@omegup-school/ui-configs/effects/shadow';
import { colors } from '@omegup-school/ui-configs/colors';

export const useContainerStyles = createUseStyles({
  container: {
    width: 'fit-content',
    display: 'flex',
    padding: spacing.s5,
    flexDirection: 'column',
    alignItems: 'flex-start',

    borderRadius: borders.r5,
    border: [borders.b2, 'solid', colors.background.overlay],
    background: colors.background.default,

    /* Drop Shadow/Small */
    boxShadow: shadowXSmall,
  },
  border: {
    '& $line':{
      margin: [spacing.s2],
      border: [borders.b1, 'solid'],
      borderColor: colors.background.overlay,
      width: '-webkit-fill-available',
    },
    
  },
  flat: {},
  line: {}
    
});
