import React from 'react';
import { ChipsLabelProps } from './ChipsLabel.types';
import { useStyles } from './ChipsLabel.styles';

export const ChipsLabel = ({label} : ChipsLabelProps) => {
  const classes = useStyles();
  return (
    <span className={classes.label}>{label}</span>
  );
};
