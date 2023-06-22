import { forwardRef } from 'react';
import { useOutlinedInputStyles } from './Input.styles';
import { ControlledOutlinedInputProps } from './Input.types';
import { forward } from '../common/forward';

export const OutlinedInput = forwardRef(
  (
    props: ControlledOutlinedInputProps,
    ref: React.ForwardedRef<{ focus: () => void }>
  ) => {
    const { label, placeholder, type, onBlur, onChange, value, disabled } =
      props;
    const classes = useOutlinedInputStyles();
    return (
      <div className={classes.root}>
        <div className={classes.lb}>
          <span className={classes.label}>{label}</span>
        </div>{' '}
        <div className={classes.cc}>
          <input
            onBlur={() => onBlur()}
            onChange={(e) => onChange(e.target.value)}
            {...{ placeholder, type, value, disabled }}
            ref={forward(ref)}
            className={classes.input}
          />
        </div>
      </div>
    );
  }
);
