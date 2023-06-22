import { Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './Select.styles';
import { ControlledSelectProps } from './Select.types';
import { forwardRef } from 'react';
import { forward } from '../common/forward';

export const Select = forwardRef(
  (
    props: ControlledSelectProps,
    ref: React.ForwardedRef<{ focus: () => void }>
  ) => {
    const { size, style, disabled, label, onChange, value = false, onBlur } = props;
    const classes = useSelectStyles(),
      disabledClass = classes[disabled ? 'disabled' : 'enabled'];
    return (
      <label
        tabIndex={-1}
        className={`${classes.label} ${classes[style]} ${classes[size]} ${disabledClass}`}
      >
        <input
          type="checkbox"
          className={classes.input}
          onChange={(e) => onChange(e.target.checked)}
          onBlur={() => onBlur()}
          ref={forward(ref)}
          checked={value}
        />
        <div className={classes.container}>
          <span className={classes.checkbox}>
            <span className={classes.square}>
              <Square width="100%" />
            </span>
            <span className={classes.tick}>
              <Tick width="100%" />
            </span>
          </span>
          <span className={classes.labelText}>{label}</span>
        </div>
      </label>
    );
  }
);
