import React from 'react'
import { useStyles } from './HeaderCellLabel.styles';

export const HeaderCellLabel = ({ value }: { value: string }) => {
  const classes = useStyles();
  return (
    <div className={classes.cellLabel}>{value}</div>
  )
}
