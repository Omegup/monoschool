import React from 'react'
import { useStyles } from './TabContainer.styles';
import { TabSearchProps } from './TabContainer.types';
import { Tab } from '../Tab/Tab';
import { TabBadge } from '../TabBadge';

export const TabContainer = ({ selected, label, badge }: TabSearchProps) => {
  const classes = useStyles();
  return (
    <div className={classes.topSearchContainer}>
      <div
        className={`${classes.tabSearch} ${selected ? classes.selected : ''}`}
      >
        <Tab label={label} />
        <TabBadge badge={badge} />
      </div>
    </div>
  )
}
