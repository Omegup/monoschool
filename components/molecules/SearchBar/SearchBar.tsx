import { Close, SearchStatus } from '@omegup-school/ui-assets';
import { useSearchBarStyles } from './SearchBar.styles';
import { SearchBarProps } from './SearchBar.types';
import { colors } from '@omegup-school/ui-atoms/colors';
import { widths } from '@omegup-school/ui-atoms/sizes';

export const SearchBar = ({ size,label,displayClose }: SearchBarProps) => {
  const classes = useSearchBarStyles();

  return (
    <div className={`${classes[size]}`}>
      <div className={classes.container}>
      <span className={classes.SearchStatus}>
         <SearchStatus color={colors.grey[400]} width={"100%"}/>
         </span>
        <input
        className={classes.input}
          type='text'
          placeholder={label}
          
        />
        <span className={classes.Close}>
         { displayClose && 
         <Close color={colors.grey[400]} width={"100%"}/>}
         </span>
      </div>
    </div>
  );
};
