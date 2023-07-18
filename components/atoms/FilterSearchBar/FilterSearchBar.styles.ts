import { colors } from '@omegup-school/ui-configs/colors';
import { widths } from '@omegup-school/ui-configs/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { shadowXSmall } from '@omegup-school/ui-configs/effects/shadow';

export const useSearchBarStyles = createUseStyles({
  input: {
    background: 'transparent',
    border: colors.background.overlay,
    outline: colors.background.overlay,
    width: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    boxShadow: shadowXSmall,
    padding: spacing.s4,
    borderRadius: borders.r5,
    width: 'fit-content',
    background: 'transparent',
    gap: spacing.s2,
    border: [borders.b2, 'solid', colors.background.overlay],
    '& $input': {
      color: colors.grey[500],
      ...styles.paragraph_xSmall_regular,
      '&::placeholder': {
        color: colors.grey[400],
      },

      '& $icon': {
        color: colors.grey[400],
        width: widths.searchBar.small,
        height: widths.searchBar.small,
        
      },
    },
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
  },
});
