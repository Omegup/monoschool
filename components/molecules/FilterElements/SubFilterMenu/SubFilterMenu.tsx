import { useFilterListeCheckBoxStyles } from './SubFilterMenu.styles';
import { SubFilterMenuProps } from './SubFilterMenu.types';

import { FilterCheckBox } from '../FilterCheckBox/FilterCheckBox';
import { forwardRef } from 'react';

export const SubFilterMenu = forwardRef(
  (props: SubFilterMenuProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, showImage, child, SearchBar } = props;
    const classes = useFilterListeCheckBoxStyles();

    return (
      <div className={`${classes.container} ${classes[size]}`}>
        {SearchBar}
        {child.map((item) =>(item))}

      </div>
    );
  }
);
