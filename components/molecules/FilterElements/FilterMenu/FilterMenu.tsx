import { useFilterStyles } from './FilterMenu.styles';
import { FilterMenuProps } from './FilterMenu.types';
import { FilterButton } from '../FilterButton/FilterButton';
import { forwardRef } from 'react';

export const FilterMenu = forwardRef(
  (props: FilterMenuProps, ref: React.Ref<HTMLInputElement>) => {
    const { child} = props;
  const classes = useFilterStyles();
  return (
    <div {...ref} className={classes.container}>
      {child.map((item, index) => (
        <>
          {index != 0 ? <div className={classes.line}></div> : <></>}
          <FilterButton
            showIcon={item.showIcon}
            label={item.label}
            onClick={item.onClick}
            onBlur={item.onBlur}
            icon={item.icon}
          />
        </>
      ))}
    </div>
  );
})
