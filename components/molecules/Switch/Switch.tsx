import React, { useState } from 'react'
import { useStyles } from './Switch.styles'
import { SwitchProps } from './switch.types';

export const Switch = ({checked , onChange} : SwitchProps) => {
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
  )
}
