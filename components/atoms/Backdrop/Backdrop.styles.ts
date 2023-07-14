import { colors } from '@omegup-school/ui-configs/colors'
import { createUseStyles } from 'react-jss'
import { opacityMedium } from '@omegup-school/ui-configs/effects/opacity';

export const useStyles = createUseStyles({
  backdrop: {
    position: "fixed",
    background: colors.background.overlay,
    opacity: opacityMedium,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
})
