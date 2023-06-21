import React from 'react'
import { ChipsProp } from './Chips.types'
import { useStyles } from './Chips.styles'
import { Vector } from '@omegup-school/ui-assets';
import { colors } from '@omegup-school/ui-atoms/colors';

export const Chips = ({ person, onCancel }: ChipsProp) => {

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
      <span className={classes.parent}>Parents</span>
      <div className={classes.labelContainer}>
        {person.map(({ label }, index, { length }) => {
          return (
            <>
              <div className={classes.avatar}>
              </div>
              <span key={index} className={classes.label}>{label}</span>
              {
                index + 1 < length
                  ? <span className={classes.labelSeparator} key={index}>/</span>
                  : <div className={classes.cancelIcon} onClick={() => onCancel()}>
                    <Vector width='6.58' height='6.58' />
                  </div>
              }
            </>
          )
        })}
      </div>

    </div >
  )
}
