import { createUseStyles } from 'react-jss';
import { HeadListeButtonProps } from './HeadListeButton.types';
import { spacing } from '@omegup-school/ui-configs/sizes';

export const useHeadListeButtonStyles = createUseStyles({
  container: {
    display: 'flex',
    padding: spacing.s4,
    alignItems: 'center',
    gap: spacing.s4,
  },
});
