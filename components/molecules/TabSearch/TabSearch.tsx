import React from 'react'
import { createUseStyles } from 'react-jss';
import { useStyles } from './TabSearch.styles';

const TabSearch = () => {
  
  const classes = useStyles();

  return (
    <div className={classes['top-search-container']}>
      <div className={classes.tab_search}>
        <p className={classes.tab_text}>Tous</p>
        <p className={classes.tab_number}>20</p>
      </div>
      <div className={classes.tab_search}>
        <p className={classes.tab_text}>Apprenant</p>
        <p className={classes.tab_number}>12</p>
      </div>
      <div className={classes.tab_search}>
        <p className={classes.tab_text}>Parents</p>
        <p className={classes.tab_number}>3</p>
      </div>
      <div className={classes.tab_search}>
        <p className={classes.tab_text}>Professeur</p>
        <p className={classes.tab_number}>1</p>
      </div>
    </div>
  )
}

export default TabSearch