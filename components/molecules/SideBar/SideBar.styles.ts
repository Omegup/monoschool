import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { createUseStyles } from 'react-jss';

export const useSelectStyles = createUseStyles({
  sideBarButton: {
    position: 'absolute',
    right: -15,
    top: 20,
  },
  container: {
    width: 'fit-content',
    display: 'flex',
    padding: spacing.s5,
    flexDirection: 'column',
    alignItems: 'start',
    gap: spacing.s3,
    borderRadius: borders.r5,
    background: colors.background.default,
    boxShadow: ' 0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    position: 'relative',
  },
  notCollopsed:{},
  collopsed: {
    '& $container': {
      gap: spacing.s9,
    },
  },
});
