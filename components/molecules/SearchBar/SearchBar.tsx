import { Arrow, SearchStatus } from '@omegup-school/ui-assets';
import { useFilterStyles } from './SearchBar.styles';
import { FilterProps } from './Filter.types';

export const SearchBar = ({ size, style, label, showIcon }: FilterProps) => {
  const classes = useFilterStyles();
 
  return (
    <div className={`${classes[style]} ${classes[size]}`}>
      <div className={classes.container}>
        <span> <SearchStatus/></span>
        <input
          id="search"
          type="search"
          placeholder="label"
        />
        <button type="submit">Go</button>
      </div>
    </div>
  );
};
