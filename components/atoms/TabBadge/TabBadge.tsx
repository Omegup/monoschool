import React from 'react'
import { useStyles } from './TabBadge.styles';

export const TabBadge = ({ badge }: { badge?: number }) => {
  const classes = useStyles();
  return (
    <>
      {badge && (
        <span className={classes.tabNumber}>{badge}</span>
      )}
    </>
  )
}
