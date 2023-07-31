import { createUseStyles } from 'react-jss';

export const useProgressBarElementStyles = createUseStyles(
  ({ leftPercentage, width }: { leftPercentage: number; width: number }) => ({
    unitContainer: {
      position: 'absolute',
      height: '100%',
      width: width ? `${width}%` : undefined,
      left: `${leftPercentage}%`,
      display: 'flex',
      alignItems: 'center',
      // border: '1px solid white'
    },
  })
);
