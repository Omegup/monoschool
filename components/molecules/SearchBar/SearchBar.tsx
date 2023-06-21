import { Close, SearchStatus } from '@omegup-school/ui-assets';
import { useSearchBarStyles } from './SearchBar.styles';
import { SearchBarProps } from './SearchBar.types';
import { colors } from '@omegup-school/ui-atoms/colors';

export const SearchBar = ({ size, style, label }: SearchBarProps) => {
  const classes = useSearchBarStyles();
 
  return (
    <div className={`${classes[style]} ${classes[size]}`}>
      <div className={classes.container}>
        <span className={classes.SearchStatus}> <SearchStatus color={colors.grey[400]} /></span>
        <input
        className={classes.input}
          type='text'
          placeholder={label}
        />
         
      </div>
    </div>
  );
};
