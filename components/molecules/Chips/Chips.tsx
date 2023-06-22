import { Close, Essential, Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './Chips.styles';
import { ChipsProps } from './Chips.types';
import { widths } from '@omegup-school/ui-atoms/sizes';

export const Chips = ({ size, style, disabled, label }: ChipsProps) => {
  const classes = useSelectStyles(),
    disabledClass = classes[disabled ? 'disabled' : 'enabled'];
  return (
    <label
      tabIndex={-1}
      className={`${classes.label} ${classes[style]} ${classes[size]} ${disabledClass}`}
    >
      <div className={classes.container}>
            <Essential width={widths.icon[size]} />
        <span className={classes.labelText}>{label}</span>
        <Close width={widths.icon[size]} />
      </div>
    </label>
  );
};
