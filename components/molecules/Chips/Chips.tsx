import { useSelectStyles } from './Chips.styles';
import { ControlledChipsProps } from './Chips.types';
import { forwardRef } from 'react';

export const Chips = forwardRef(
  (props: ControlledChipsProps, ref: React.Ref<HTMLInputElement>) => {
    const {
      size,
      style,
      disabled,
      label,
      icon,
      iconClose,
      onChange,
      onClick,
      value,
    } = props;
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
          checked={value}
        />
        <div className={classes.container}>
          <span className={classes.Essential}>{icon}</span>
          <span className={classes.labelText}>{label}</span>

          <span className={classes.Close} onClick={() => onClick}>
            {iconClose}
          </span>
        </div>
      </label>
    );
  }
);
