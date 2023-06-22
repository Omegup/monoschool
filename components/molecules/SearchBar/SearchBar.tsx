import { Close, SearchStatus } from '@omegup-school/ui-assets';
import { useSearchBarStyles } from './SearchBar.styles';
import { SearchBarProps } from './SearchBar.types';
import { colors } from '@omegup-school/ui-atoms/colors';
import { widths } from '@omegup-school/ui-atoms/sizes';

export const SearchBar = ({ size, style, label,displayClose }: SearchBarProps) => {
  const classes = useSearchBarStyles();
 console.log(widths.icon[size])
  return (
    <div className={`${classes[style]} ${classes[size]}`}>
      <div className={classes.container}>
        <span className={classes.SearchStatus}>
         <SearchStatus color={colors.grey[400]} width={widths.icon[size]}/></span>
        <input
        className={classes.input}
          type='text'
          placeholder="Rechercher"
        />
       
        <span className={classes.Close}> { displayClose &&
         <Close color={colors.grey[400]} width={widths.icon[size]}/>}</span>
         
      </div>
    </div>
  );
};
