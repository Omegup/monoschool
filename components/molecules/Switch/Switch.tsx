import React, { useState } from 'react'
import { useStyles } from './Switch.styles'

export const Switch = () => {
  const classes = useStyles();
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const onToggle = () => setIsToggled(!isToggled);

  return (
    <label className={classes.switchContainer}>
      <input type="checkbox" className={classes.switchInput} checked={isToggled} onChange={onToggle} />
      <span className={classes.switchSlider} />
    </label>
  )
}
