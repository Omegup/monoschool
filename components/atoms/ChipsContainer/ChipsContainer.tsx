import { useSelectStyles } from './ChipsContainer.styles';
import { ControlledChipsContainerProps } from './ChipsContainer.types';
import { forwardRef } from 'react';

export const ChipsContainer = forwardRef(
  (props: ControlledChipsContainerProps, ref: React.Ref<HTMLInputElement>) => {
    const {
      size,
      variant,
      disabled,
      onChange,
      onBlur,
      value,
      children,
      icon,
    } = props;
    const classes = useSelectStyles(),
      disabledClass = classes[disabled ? 'disabled' : 'enabled'];
    return (
      <label
        tabIndex={-1}
        className={`${classes.label} ${classes[variant]} ${classes[size]} ${disabledClass}`}
      >
        <input
          type="checkbox"
          className={classes.input}
          onChange={(e) => onChange(e.target.checked)}
          {...{ ref, onBlur }}
          checked={value}
        />
        <div className={classes.container}>
          <span className={classes.icon}>
          {icon}
          </span>
          {children}
          </div>
      </label>
    );
  }
);
