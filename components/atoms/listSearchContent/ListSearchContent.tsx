import React from 'react';

import { ListSearchProps } from './ListSearchContent.types';
import { useStyles } from './ListSearchContent.styles';

export const ListSearchContent = ({name,avatar,description}: ListSearchProps) => {
  const classes = useStyles();

  return (
    <div className={classes.containerSearch}>
        <div className={classes.iconSearch}>{avatar}</div>
      <div className={classes.search}>
        <p className={classes.nameSearch} > {name} </p>
        <p className={classes.descriptionSearch} > {description} </p>
      </div>
    </div>
  );
};
