import { useSearchBarStyles } from './SearchBar.styles';
import { ControlledSearchBarProps } from './SearchBar.types';
import { forwardRef } from 'react';

export const SearchBar = forwardRef(
  (props: ControlledSearchBarProps,ref: React.Ref<HTMLInputElement>) => {
    const { variant, firstIcon, placeholder,inputType,secondIcon, displayClose, onChange,onClick, value } = props;
    const classes = useSearchBarStyles();

    return (
      <div {...{ref}} className={classes[variant]}>
        <div className={classes.container}>
          <span className={classes.firstIcon}>{firstIcon}</span>
          <input
            className={classes.input}
            type={inputType}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            value={value}
          />
          <span className={classes.secondIcon} onClick={onClick}>
            {displayClose && secondIcon}
          </span>
        </div>
      </div>
    );
  }
);
