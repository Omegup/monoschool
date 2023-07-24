import { createUseStyles } from 'react-jss';

export const useProgressBarUnitStyles = createUseStyles(
  ({
    leftPercentage,
    totalProgressUnits,
  }: {
    leftPercentage: number;
    totalProgressUnits: number;
  }) => ({
    unitContainer: {
      position: 'absolute',
      height: '100%',
      left: `${leftPercentage}%`,
      width: `${100 / totalProgressUnits}%`,
      display: 'flex',
      border : '1px solid white',
      justifyContent: 'space-around',
      alignItems: 'center',
      '& span': {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  })
);
