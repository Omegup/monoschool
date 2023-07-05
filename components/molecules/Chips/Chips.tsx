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
      firstIcon,
      secondIcon,
      onChange,
      onClick,
      onBlur,
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
          {...{ ref, onBlur }}
          checked={value}
        />
        <div className={classes.container}>
          <span className={classes.firstIcon}>{firstIcon}</span>
          <span className={classes.labelText}>{label}</span>

          <span className={classes.secondIcon}  {...{ ref }} onClick={() => onClick}>
            {secondIcon}
          </span>
        </div>
      </label>
    );
  }
);
