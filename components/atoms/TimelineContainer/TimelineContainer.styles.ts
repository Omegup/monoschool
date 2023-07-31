import { colors } from '@omegup-school/ui-configs/colors';
import { borders } from '@omegup-school/ui-configs/sizes';
import { typography } from '@omegup-school/ui-configs/typography/typography.cnst';
import { createUseStyles } from 'react-jss';

export const useTimelineContainerStyles = createUseStyles({
  main: {
    position: 'relative',
    backgroundColor: colors.lightblue[500],
    height: 106,
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
});
