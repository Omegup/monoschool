import React from 'react'
import { useStyles } from './TabLabel.styles';
import { useContainerStateSelector } from '../contexts/pointer';

export const TabLabel = ({ label ,selected}: { label: string,selected : boolean }) => {
  const containerStateSelector = useContainerStateSelector();
  const classes = useStyles({theme: {containerStateSelector}});

  return (
    <span className={`${classes.tabText} ${selected ? classes.selected : ''}`}>{label}</span>
  )
}
