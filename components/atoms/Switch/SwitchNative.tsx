import React from 'react';
import { useStyles } from './SwitchNative.styles';
import { SwitchProps } from './SwitchNative.types';

export const SwitchNative = ({checked , onChange} : SwitchProps) => {
  const classes = useStyles();

  return (
    <label className={classes.toggleSwitch}>
    <input type="checkbox" checked={checked} onChange={() => onChange(checked)} />
    <span
      className={`${classes.switch} ${checked ? classes.switchCheckedBg : ''}`}
    >
      <span
        className={`${classes.switchBefore} ${checked ? classes.switchChecked : ''}`}
      />
    </span>
  </label>
  );
};
