import React from 'react'
import { ChipsProp } from './Chips.types'
import { useStyles } from './Chips.styles'

export const Chips = ({person,onCancel} : ChipsProp) => {

  const labels = [
    {
      label: 'Ala Bouziri',
    },
    {
      label: 'Toukbari',
    }
  ];

  const classes = useStyles();

  return (
    <div className={classes.chipContainer}>
      <p className={classes.parent}>Parents</p>
      <div className={classes.labelContainer}>
        {person.map(({ label }, index, { length }) => {
          return (
            <>
              <div className={classes.avatar}></div>
              <p key={index} className={classes.label}>{label}</p>
              {
                index + 1 < length 
                ?   <p className={classes.label} key={index}>/</p>
                :    <span className={classes.cancelIcon} onClick={() => onCancel()}>X</span>
              }
            </>
          )
        })}
      </div>

    </div>
  )
}
