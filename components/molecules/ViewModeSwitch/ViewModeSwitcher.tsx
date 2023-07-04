import { Square, Tick } from '@omegup-school/ui-assets';
import { useViewModeSwitcherStyles } from './ViewModeSwitcher.styles';
import { ControlledViewModeSwitcherProps } from './ViewModeSwitcher.types';
import { forwardRef } from 'react';


export const ViewModeSwitcher = forwardRef(
  (props: ControlledViewModeSwitcherProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, disabled, label, onChange, value, onBlur } = props;
    const classes = useViewModeSwitcherStyles(),
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
          {...{ ref, onBlur }}
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
