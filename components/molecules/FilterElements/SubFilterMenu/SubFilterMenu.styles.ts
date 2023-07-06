import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { createUseStyles } from 'react-jss';
import { shadowMedium } from '@omegup-school/ui-atoms/effects/shadow';

export const useFilterListeCheckBoxStyles = createUseStyles({
  container: {
    display: 'inline-flex',
    padding: spacing.s5,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: spacing.s5,
    border: [borders.b2, 'solid', colors.background.overlay],
    background: colors.background.default,
    boxShadow: shadowMedium,
  },
});
