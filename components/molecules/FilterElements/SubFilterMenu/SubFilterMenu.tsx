import { useFilterListeCheckBoxStyles } from './SubFilterMenu.styles';
import { SubFilterMenuProps } from './SubFilterMenu.types';

import { FilterCheckBox } from '../FilterCheckBox/FilterCheckBox';

export const SubFilterMenu = ({
  size,
  showImage,
  label,
  child,
  SearchBar,
}: SubFilterMenuProps) => {
  const classes = useFilterListeCheckBoxStyles();
  return (
    <div className={`${classes.container} ${classes[size]}`}>
      {SearchBar}
      {child.map((item) => (
        <FilterCheckBox
          size={item.size}
          label={item.label}
          showImage={showImage}
          value={item.value}
          onChange={item.onChange}
          onBlur={item.onBlur}
          imageURL={item.imageURL}
        />
      ))}
    </div>
  );
};
