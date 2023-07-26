import { colors } from '@omegup-school/ui-configs/colors';
import { borders } from '@omegup-school/ui-configs/sizes';
import { typography } from '@omegup-school/ui-configs/typography/typography.cnst';
import { createUseStyles } from 'react-jss';
export const useStyles = createUseStyles({
  main: {
    position: 'relative',
    margin: '25vh',
    backgroundColor: colors.lightblue[500],
    height: 123,
    width: 640,
    borderRadius: borders.r5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingBlock: 10,
    paddingInline: 0,
    '& *': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      ...typography.paragraph.small.regular , 
    },
    '& h3': {
        ...typography.paragraph.medium.medium , 
    },
  },
  top: {
    width: '93%',
    height: '39%',
  },
  bottom: {
    width: '93%',
    height: '19.5%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  root: {
    width: '93%',
    height: '24%',
    backgroundColor: colors.headline[500],
    borderRadius: borders.r5,
    position: 'relative',
  },
  monthArea: {
    position: 'absolute',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& span': {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  progress: {
    position: 'absolute',
    borderRadius: borders.r5,
    height: '100%',
    backgroundColor: colors.blue[500],
    zIndex: 10,
  },
  iconStyle: {
    height: 22,
    width: 22,
  },
  tooltipIcon: {
    width: 50,
    height: 50,
  },
});
