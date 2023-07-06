import { useFilterListeCheckBoxStyles } from './SubFilterMenu.styles';
import { SubFilterMenuProps } from './SubFilterMenu.types';
import { forwardRef } from 'react';

export const SubFilterMenu = forwardRef(
  (props: SubFilterMenuProps, ref: React.Ref<HTMLInputElement>) => {
    const { child, SearchBar } = props;
    const classes = useFilterListeCheckBoxStyles();
    return (
      <div {...ref} className={`${classes.container}`}>
        {SearchBar}
        {child.map((item) => item)}
      </div>
    );
  }
);
