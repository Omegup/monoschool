import { colors } from '@omegup-school/ui-configs/colors';
import { shadowXSmall } from '@omegup-school/ui-configs/effects/shadow';
import { borders } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  chipContainer : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    // backgroundColor: colors.blue[500],
    border: '1px solid' + colors.blue[500],
    borderRadius: borders.r3,
    cursor: 'default',
    boxShadow: shadowXSmall
  },
});