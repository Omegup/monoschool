import { Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './Select.styles';
import { SelectProps } from './Select.types';

export const Select = ({ size, style, disabled, label }: SelectProps) => {
  const classes = useSelectStyles(),
    disabledClass = classes[disabled ? 'disabled' : 'enabled'];
  return (
    <label
      tabIndex={-1}
      className={`${classes.label} ${classes[style]} ${classes[size]} ${disabledClass}`}
    >
      <input type="checkbox" className={classes.input} />
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
};
