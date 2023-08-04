import React from 'react'
import { TabProps } from './Tab.types'
import { useStyles } from './Tab.styles'
import { colors } from '@omegup-school/ui-configs/colors';

export const Tab = ({ Icon, label, onClick, selected }: TabProps) => {
  const classes = useStyles();

  return (
    <div className={selected ? classes.tabSelected : classes.tab} onClick={onClick}>
      {Icon && <Icon bold={selected} color={selected ? colors.dark.default : colors.grey[500]} />}
      <span className={classes.tabLabel}>{label}</span>
    </div>
  )
}
