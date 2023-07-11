import React from 'react'
import { TabProps } from './Tab.types'
import { useStyles } from './Tab.styles'

export const Tab = ({ Icon, label, onClick, selected }: TabProps) => {
  const classes = useStyles();

  return (
    <div className={selected ? classes.tabSelected : classes.tab} onClick={onClick}>
      {Icon && <Icon bold={selected} />}
      <span className={classes.tabLabel}>{label}</span>
    </div>
  )
}
