import React from 'react'
import { TabsProps } from './Tabs.types'
import { useStyles } from './Tabs.styles';
import { ArrowLeftSquare, ArrowRightSquare } from '@omegup-school/ui-assets';

export const Tabs = ({ tabs, onSelect, selected }: TabsProps) => {
  const classes = useStyles();
  return (
    <div className={classes.tabs}>
      <div className={classes.tabsContainer}>
        {
          tabs.map(({ label, Icon }, index) => (
            <div key={index} className={index === selected ? classes.tabSelected : classes.tab} onClick={() => onSelect(index)}>
              {Icon && <Icon bold={index === selected} />}
              <span className={classes.tabLabel}>{label}</span>
            </div>
          ))
        }
      </div>
      <div className={classes.tabsActionsContainer}>
        <div onClick={() => onSelect(selected - 1)}>
          <ArrowLeftSquare bold width='36' height='36' />
        </div>
        <div onClick={() => onSelect(selected + 1)}>
          <ArrowRightSquare  bold width='36' height='36' />
        </div>
      </div>
    </div>
  )
}
