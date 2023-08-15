import { colors } from '@omegup-school/ui-configs/colors';
import { borders } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

export const useTimelineProgressBarStyles = createUseStyles(
  ({ progressWidth }: { progressWidth: number }) => ({
    root: {
      width: 600,
      height: 30,
      backgroundColor: colors.headline[500],
      borderRadius: borders.r5,
      position: 'relative',
    },
    progressBar: {
      position: 'absolute',
      borderRadius: borders.r5,
      height: '100%',
      backgroundColor: colors.blue[500],
      zIndex: 10,
      width: `${progressWidth}%`,
    },
  })
);
