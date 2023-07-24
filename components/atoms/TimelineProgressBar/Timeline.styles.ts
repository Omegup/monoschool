import { createUseStyles } from 'react-jss';

export const useTimelineProgressBarStyles = createUseStyles(
  ({
    progress,
    totalProgressUnits,
    containerStateSelector,
    isShowingChildrenOnHover,
  }: {
    progress: number;
    totalProgressUnits: number;
    containerStateSelector: string;
    isShowingChildrenOnHover?: boolean;
  }) => ({
    root: {
      width: '93%',
      height: '24%',
      backgroundColor: '#094067',
      borderRadius: 10,
      position: 'relative',
    },
    progressBar: {
      position: 'absolute',
      borderRadius: 10,
      height: '100%',
      backgroundColor: '#3DA9FC',
      zIndex: 10,
      width: `${(progress * 100) / totalProgressUnits}%`,
      ...(isShowingChildrenOnHover
        ? {
            [`${containerStateSelector}:not(:hover) & > *`]: {
              opacity: 0,
            },
          }
        : {
          }),
    },
  })
);
