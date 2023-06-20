import React from 'react'
import { ChipsProp } from './Chips.types'
import { useStyles } from './Chips.styles'

export const Chips = () => {

  const labels = [
    {
      label: 'Ala Bouziri',
    },
    {
      label: 'Toukbari',
    },
    {
      label: 'Toukbari',
    },
  ];

  const classes = useStyles();

  return (
    <div className={classes.chipContainer}>
      <p className={classes.parent}>Parent</p>

      {labels.map(({ label }, index, { length }) => {
        return (
          <div className={classes.labelContainer}>
            <p key={index} className={classes.label}>{label}</p>
            {index + 1 < length ?
              <p className={classes.label} key={index}>/</p>
              : null}
          </div>
        )
      })}

    </div>
  )
}
