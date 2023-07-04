import { useSearchBarStyles } from './SearchBar.styles';
import { ControlledSearchBarProps } from './SearchBar.types';
import { forwardRef } from 'react';

export const SearchBar = forwardRef(
  (props: ControlledSearchBarProps) => {
    const { size, icon, placeholder,inputType,closeIcon, displayClose, onChange,onClick, value } =
      props;
    const classes = useSearchBarStyles();

    return (
      <div className={`${classes[size]}`}>
        <div className={classes.container}>
          <span className={classes.SearchStatus}>{icon}</span>
          <input
            className={classes.input}
            type={inputType}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            value={value}
          />
          <span className={classes.close} onClick={onClick}>
            {displayClose && closeIcon}
          </span>
        </div>
      </div>
    );
  }
);
