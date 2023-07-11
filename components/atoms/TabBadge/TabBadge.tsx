import React from 'react'
import { useStyles } from './TabBadge.styles';
import { useContainerStateSelector } from '../contexts/pointer';

export const TabBadge = ({ badge,selected  }: { badge?: number,selected : boolean }) => {
  const containerStateSelector = useContainerStateSelector();
  const classes = useStyles({theme: {containerStateSelector}});
  return (
    <>
      {badge && (
        <span className={`${classes.tabNumber} ${selected ? classes.selected : ''}`}>{badge}</span>
      )}
    </>
  )
}
