import { forwardRef } from 'react';
import { useSearchBarStyles } from './FilterSearchBar.styles';
import { ControllerFilterSearchBarProps } from './FilterSearchBar.types';
import { joinClassNames } from '@omegup-school/ui-configs/typography';

export const FilterSearchBar = forwardRef(
  (
    props: ControllerFilterSearchBarProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const classes = useSearchBarStyles();
    const {
      startIcon,
      placeholder,
      clearIcon,
      displayClearIcon,
      onChange,
      onClear,
      value,
    } = props;

    return (
      <div
        {...ref}
        className={joinClassNames(classes.container)}
      >
        <span className={classes.icon}>{startIcon}</span>
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
    );
  }
);
