import { Close } from '@omegup-school/ui-assets';
import { useSearchBarStyles } from './SearchBar.styles';
import { ControlledSearchBarProps } from './SearchBar.types';
import { colors } from '@omegup-school/ui-atoms/colors';
import { forwardRef } from 'react';

export const SearchBar = forwardRef(
  (props: ControlledSearchBarProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, Icon, placeholder,inputType,closeIcon, displayClose, onChange, value, onBlur } =
      props;
    const classes = useSearchBarStyles();

    return (
      <div className={`${classes[size]}`}>
        <div className={classes.container}>
          <span className={classes.SearchStatus}>{Icon}</span>
          <input
            className={classes.input}
            type={inputType}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            {...{ ref, onBlur }}
            value={value}
          />
          <span className={classes.close}>
            {displayClose && closeIcon}
          </span>
        </div>
      </div>
    );
  }
);