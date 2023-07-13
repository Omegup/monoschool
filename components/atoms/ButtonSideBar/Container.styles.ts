import { colors } from '@omegup-school/ui-configs/colors';
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
    /* Drop Shadow/Small */
    boxShadow:
      '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)',
      cursor:'pointer',
  },
  icon: {
    width: widths.sideBar.icon,
    height: widths.sideBar.icon,
    display: 'flex',
    alignItems: 'center',
  },
});
