import React from 'react';
import { ChipsContentProps } from './ChipsContent.types';
import { useStyles } from './ChipsContent.styles';
import { Vector } from '@omegup-school/ui-assets';

export const ChipsContent = ({ name, avatar, isLastIndex, onCancel }: ChipsContentProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.nameContainer}>
        {avatar}
        <span className={classes.label}>{name}</span>
      </div>
      {
        isLastIndex
          ?
          <div className={classes.cancelIcon} onClick={() => onCancel()}>
            <Vector width='12' height='12' />
          </div>
          :
          <span className={classes.labelSeparator}>/</span>
      }
    </div>
  );
};
