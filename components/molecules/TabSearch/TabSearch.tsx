import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import { useStyles } from './TabSearch.styles';

export const TabSearch = ({data} : { data : { tabText: string, tabNumber: number }[]}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const classes = useStyles();

  return (
    <div className={classes.topSearchContainer}>
      {
        data.map((tabSearchData, index) => (
          <div className={`${classes.tabSearch} ${index === selectedIndex ? classes.selected : ''}`}
            key={index} onClick={() => setSelectedIndex(index)}>
            <p className={classes.tabText}>{tabSearchData.tabText}</p>
            <p className={classes.tabNumber}>{tabSearchData.tabNumber}</p>
          </div>
        ))
      }
    </div>
  )
}