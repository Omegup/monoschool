import { Close, Essential, Square, Tick } from '@omegup-school/ui-assets';
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
      <span className={classes.Essential}>
        <Essential width={"100%"} />
        </span>
        <span className={classes.labelText}>{label}</span>
        <span className={classes.Close}>
          <Close width={"100%"}  />
        </span>
      </div>
    </label>
  );
};
