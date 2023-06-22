import { Close, Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './Chips.styles';
import { ChipsProps } from './Chips.types';

export const Chips = ({ size, style, disabled, label }: ChipsProps) => {
  const classes = useSelectStyles(),
    disabledClass = classes[disabled ? 'disabled' : 'enabled'];
  return (
    <label
      tabIndex={-1}
      className={`${classes.label} ${classes[style]} ${classes[size]} ${disabledClass}`}
    >
      <div className={classes.container}>
          <span className={classes.square}>
            <Close width="100%" />
          </span>
 
        <span className={classes.labelText}>{label}</span>
      </div>
    </label>
  );
};
