import { useSearchBarStyles } from './SearchBar.styles';
import { ControlledSearchBarProps } from './SearchBar.types';
import { forwardRef } from 'react';

export const SearchBar = forwardRef(
  (props: ControlledSearchBarProps,ref: React.Ref<HTMLInputElement>) => {
    const { variant, firstIcon, placeholder,clearIcon, displayClearIcon, onChange,onClear, value } = props;
    const classes = useSearchBarStyles();

    return (
      <div {...ref} className={classes[variant]}>
        <div className={classes.container}>
          <span className={classes.icon}>{firstIcon}</span>
          <input
            className={classes.input}
            type="text"
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            value={value}
          />
          <span className={classes.icon} onClick={onClear}>
            {displayClearIcon && clearIcon}
          </span>
        </div>
      </div>
    );
  }
);
