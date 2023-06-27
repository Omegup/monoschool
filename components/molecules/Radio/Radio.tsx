import React from 'react'
import { useRadioStyles } from './Radio.styles'
import { RadioProps } from './Radio.types';

export const Radio = ({ name, variant, size, checked, disabled }: RadioProps) => {
  const classes = useRadioStyles();
  const isScaledVariant = variant === 'scale';

  return (
    <div className={`${classes.radioContainer} ${classes[size]} ${disabled && classes.disabled}`}>
      <input
        type="radio"
        id="radio"
        name={name}
        value="radio"
        checked={checked}
        className={`${classes.radio} ${isScaledVariant ? classes.scaledRadio : classes.borderRadio} ${size}`}
      />
      <label htmlFor="radio" className={`${classes.radioLabel} ${size}`}>
        Radio
      </label>
    </div>
  );
}