import { colors } from '@omegup-school/ui-configs/colors';
import { borders } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

export const useTimelineProgressBarStyles = createUseStyles(
  ({
    progressWidth,
    containerStateSelector,
    isShowingChildrenOnHover,
  }: {
    progressWidth: number;
    containerStateSelector: string;
    isShowingChildrenOnHover?: boolean;
  }) => ({
    root: {
      width: '93%',
      height: '24%',
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
      ...(isShowingChildrenOnHover
        ? {
            [`.${containerStateSelector}:not(:hover) &> *`]: {
              opacity: 0,
            },
          }
        : {}),
    },
  })
);
