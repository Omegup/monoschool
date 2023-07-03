import { useRadioStyles } from './Radio.styles';
import { RadioProps } from './Radio.types';

export const Radio = ({ name, variant, size, checked, disabled }: RadioProps) => {
  const classes = useRadioStyles();

  return (
    <div className={`${classes.radioContainer} ${classes[size]} ${disabled && classes.disabled}`}>
      <input
        className={`
            ${classes.radio} 
            ${size}
            ${variant === 'border'
            ? classes.borderRadio
            : classes.scaledRadio}
        `}
        type="radio"
        id="radio"
        name={name}
        value="radio"
        checked={checked}
      />
      <label htmlFor="radio" className={`${classes.radioLabel} ${size}`}>
        Radio
      </label>
    </div>
  );
}