import React from 'react';
import { ChipsPersonProps } from './ChipsPeron.types';
import { useStyles } from './ChipsPeron.styles';
import { Vector } from '@omegup-school/ui-assets';

export const ChipsPerson = ({ name, avatar, isLastIndex, onCancel }: ChipsPersonProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.nameContainer}>
        {avatar}
        <span className={classes.label}>{name}</span>
      </div>
      {
        isLastIndex
          ? <span className={classes.labelSeparator}>/</span>
          : <div className={classes.cancelIcon} onClick={() => onCancel()}>
            <Vector width='12' height='12' />
          </div>
      }
    </div>
  );
};
