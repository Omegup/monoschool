import React from 'react'
import { TabsArrowProps } from './TabsArrow.types'
import { ArrowLeftSquare, ArrowRightSquare } from '@omegup-school/ui-assets'
import { useStyles } from './TabsArrow.styles';

export const TabsArrow = ({ action }: TabsArrowProps) => {
  const classes = useStyles();
  
  return (
    <div className={classes.tabsActionsContainer}>
      <div onClick={() => action('increment')}>
        <ArrowLeftSquare bold width='36' height='36' />
      </div>
      <div onClick={() => action('decrement')}>
        <ArrowRightSquare bold width='36' height='36' />
      </div>
    </div>
  )
}
