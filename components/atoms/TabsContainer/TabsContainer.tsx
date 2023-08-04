import React from 'react'
import { useStyles } from './TabsContainer.styles';
import { TabsContainerProps } from './TabsContainer.types';

export const TabsContainer = ({ children }: TabsContainerProps) => {
  const classes = useStyles();
  return (
    <div className={classes.tabs}>
      {children}
    </div>
  )
}
