import { Tick } from '@omegup-school/ui-assets';
import { joinClassNames } from '@omegup-school/ui-configs/typography';
import { forwardRef } from 'react';
import { useContainerStateSelector } from '../contexts/pointer';
import { useCheckBoxStyles } from './NakedCheckBox.styles';
import { ControlledNakedCheckboxProps } from './SimpleTypes';

export const NakedCheckBox = forwardRef(({
  variant,
  size,
  disabled,
  checked,
  onChange,
  onBlur,
}: ControlledNakedCheckboxProps,
  ref?: React.Ref<HTMLInputElement>
) => {
  const containerStateSelector = useContainerStateSelector();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };
  const classes = useCheckBoxStyles({ theme: { containerStateSelector } });

  return (
    <label
      onClick={(event) => event.stopPropagation()}
      className={joinClassNames(classes.label, classes[size], classes[variant])}
    >
      <input
        onChange={changeHandler}
        type="checkbox"
        className={classes.input}
        {...{ checked, disabled, ref, onBlur }}
      />
      <span className={classes.container}>
        <Tick width="100%" />
      </span>
    </label>
  );
}
);
