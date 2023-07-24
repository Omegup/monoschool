import { colors } from '@omegup-school/ui-configs/colors';
import { createUseStyles } from 'react-jss';

export const useTimelineContainerStyles = createUseStyles({
  main: {
    position: 'relative',
    backgroundColor: colors.lightblue[500],
    height: 123,
    width: 640,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingBlock: 10,
    paddingInline: 0,
    fontFamily: 'Poppins',
    '& *': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontSize: 14,
      fontWeight: 400,
    },
    '& h3': {
      fontSize: 16,
      fontWeight: 500,
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
});
