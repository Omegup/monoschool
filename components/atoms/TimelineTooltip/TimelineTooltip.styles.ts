import { colors } from '@omegup-school/ui-configs/colors';
import { typography } from '@omegup-school/ui-configs/typography/typography.cnst';
import { createUseStyles } from 'react-jss';

export const useTimelineTooltipStyles = createUseStyles({
  toolTipBox: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.blue['500'],
    height: '45%',
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...typography.paragraph.small.regular , 
    letterSpacing: '0em',
    textAlign: 'left',
    color: colors.background.default,
    padding: 10,
    gap: 10,
    '& *': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    '& span': {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column',
    },
    '& div': {
      display: 'flex',
      gap: 2,
    },
  },
  tooltipIcon: {
    width: 50,
    height: 50,
  },
});
