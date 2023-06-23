import { Close, SearchStatus } from '@omegup-school/ui-assets';
import { useSearchBarStyles } from './SearchBar.styles';
import { ControlledSearchBarProps } from './SearchBar.types';
import { colors } from '@omegup-school/ui-atoms/colors';
import { forwardRef } from 'react';

export const SearchBar = forwardRef(
  (props: ControlledSearchBarProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, label,displayClose, onChange, value, onBlur } = props;
  const classes = useSearchBarStyles();

  return (
    <div className={`${classes[size]} ${classes[style]}`}>
      <div className={classes.container}>
      <span className={classes.SearchStatus}>
         <SearchStatus color={colors.grey[400]} width={"100%"}/>
         </span>
        <input
        className={classes.input}
          type='text'
          placeholder={label}
          onChange={(e) => onChange(e.target.value)}
          {...{ ref, onBlur }}
          value={value}
        />
        <span className={classes.Close}>
         { displayClose&& 
         <Close color={colors.grey[400]} width={"100%"}/>}
         </span>
      </div>
    </div>
  );
})
