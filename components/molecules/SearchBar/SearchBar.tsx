import { Arrow, Close, SearchStatus } from '@omegup-school/ui-assets';
import { useFilterStyles } from './SearchBar.styles';
import { FilterProps } from './Filter.types';

export const SearchBar = ({ size, style, label, showIcon }: FilterProps) => {
  const classes = useFilterStyles();
 
  return (
    <div className={`${classes[style]} ${classes[size]}`}>
      <div className={classes.container}>
        <span className={classes.SearchStatus}> <SearchStatus width="100%"/></span>
        <input
        className={classes.input}
          type='text'
          placeholder={label}
        />
          <span className={classes.Close}> <Close width="100%"/></span>
      </div>
    </div>
  );
};
