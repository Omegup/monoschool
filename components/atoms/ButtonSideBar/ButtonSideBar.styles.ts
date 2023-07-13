import { colors } from '@omegup-school/ui-configs/colors';
import { shadowXSmall } from '@omegup-school/ui-configs/effects/shadow';
import {spacing, widths } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

export const useButtonStyles = createUseStyles({
  button: {
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.s5,
    borderRadius: '50%',
    background: colors.background.default,
    boxShadow:shadowXSmall,
      cursor:'pointer',
  },
  icon: {
    width: widths.sideBar.icon,
    height: widths.sideBar.icon,
    display: 'flex',
    alignItems: 'center',
  },
});
