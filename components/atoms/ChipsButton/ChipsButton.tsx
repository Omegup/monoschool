
import { forwardRef } from 'react';
import { ControlledChipsButtonProps } from './ChipsButton.types';
import { useChipsButtonStyles } from './ChipsButton.styles';


export const ChipsButton = forwardRef(
  (props: ControlledChipsButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const classes = useChipsButtonStyles();
    const { ClearIcon, onClear, size } = props;
    return (
      <button
        {...ref}
        className={`${classes.button}  ${classes[size]}`}
        onClick={onClear}
      >
        <span className={classes.ClearIcon}>{ClearIcon}</span>
      </button>
    );
  }
);
