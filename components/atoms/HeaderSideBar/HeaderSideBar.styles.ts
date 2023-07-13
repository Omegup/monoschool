import { colors } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { widths } from '@omegup-school/ui-configs/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';

export const useSelectStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: spacing.s3,
    color: colors.grey[500],
    userSelect:'none'
  },
  logo: {
    display: 'flex',
    padding: ['0px ', borders.b4],
    alignItems: 'center',
    gap: spacing.s8,
    alignSelf: 'stretch',
    cursor:'pointer',
  },
  logoIcon: {
    width: widths.logo.svg,
    height:widths.logo.svg,
    display:"flex",
    alignContent:"centre",
    alignItems:"center"
  },

  SearchIcon: {
    cursor:'pointer',
    width: widths.sideBar.icon,
    height:widths.sideBar.icon,
    display: 'flex',
    padding: spacing.s5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.s5,
    borderRadius: borders.r5,
    '&:hover':{
      backgroundColor:colors.light[500],
      color:colors.blue[500],
    }
  },
});
