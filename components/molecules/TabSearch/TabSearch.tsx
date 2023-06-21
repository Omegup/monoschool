import { useState } from 'react';
import { useStyles } from './TabSearch.styles';
import { TabSearchProps } from './TabSearch.types';

export const TabSearch = ({ selectedIndex, setSelectedIndex, tabProps }: TabSearchProps) => {

  const classes = useStyles();

  return (
    <div className={classes.topSearchContainer}>
      {
        tabProps.map((tabSearchData, index) => (
          <div className={`${classes.tabSearch} ${index === selectedIndex ? classes.selected : ''}`}
            key={index} onClick={() => setSelectedIndex(index)}>
            <span className={classes.tabText}>{tabSearchData.label}</span>
            <span className={classes.tabNumber}>{tabSearchData.badge}</span>
          </div>
        ))
      }
    </div>
  )
}