import React from 'react';
import { ChipsContainerProps } from './ChipsContainer.types';
import { useStyles } from './ChipsContainer.styles';

export const ChipsContainer = ({ children }: ChipsContainerProps) => {
  const classes = useStyles();
  return (
    <div className={classes.chipContainer}>
      {children}
    </div>
  );
};
