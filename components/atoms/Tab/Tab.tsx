import React from 'react'
import { useStyles } from './Tab.styles';

export const Tab = ({ label }: { label: string }) => {
  const classes = useStyles();
  return (
    <span className={classes.tabText}>{label}</span>
  )
}
