import React from 'react'
import { ListSearchProps } from './ListSearch.types'
import { useStyles } from './ListSearch.styles';

export const ListSearch = (props: ListSearchProps) => {
  const classes = useStyles();

  return (
    <div className={classes.containerSearch}>
        <div className={classes.iconSearch}></div>
      <div className={classes.search}>
        <p className={classes.nameSearch} > {props.name} </p>
        <p className={classes.descriptionSearch} > {props.description} </p>
      </div>
    </div>
  )
}
