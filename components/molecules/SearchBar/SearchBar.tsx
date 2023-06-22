import { Close, SearchStatus } from '@omegup-school/ui-assets';
import { useSearchBarStyles } from './SearchBar.styles';
import { SearchBarProps } from './SearchBar.types';
import { colors } from '@omegup-school/ui-atoms/colors';
import { widths } from '@omegup-school/ui-atoms/sizes';

export const SearchBar = ({ size,label,displayClose }: SearchBarProps) => {
  const classes = useSearchBarStyles();
 console.log(widths.icon[size])
  return (
    <div className={`${classes[size]}`}>
      <div className={classes.container}>
       
         <SearchStatus color={colors.grey[400]} width={widths.icon[size]}/>
        <input
        className={classes.input}
          type='text'
          placeholder={label}
          
        />
       
         { displayClose && 
         <Close color={colors.grey[400]} width={widths.icon[size]}/>}
         
      </div>
    </div>
  );
};
