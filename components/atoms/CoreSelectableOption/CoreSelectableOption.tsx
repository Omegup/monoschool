import { Tick } from '@omegup-school/ui-assets';
import { joinClassNames } from '@omegup-school/ui-configs/typography';
import { forwardRef } from 'react';
import { useContainerStateSelector } from '../contexts/pointer';
import { useCoreSelectableOptionStyles } from './CoreSelectableOption.styles';
import { ControlledCoreSelectableOptionProps } from './SimpleTypes';


export const radioNodeClassNames = {
  outsideRadioCircle: "outsideRadioCircle",
  insideRadioCircle: "insideRadioCircle",
}

const CoreSelectableOptionNode = {
  checkbox: <Tick width="100%" />,
  radio: <div className={radioNodeClassNames.outsideRadioCircle}>
    <div className={radioNodeClassNames.insideRadioCircle} />
  </div>
}

export const CoreSelectableOption = forwardRef(({
  variant,
  size,
  disabled,
  checked,
  type,
  onChange,
  onBlur,
}: ControlledCoreSelectableOptionProps, ref: React.Ref<HTMLInputElement>) => {
  const containerStateSelector = useContainerStateSelector();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };
  const classes = useCoreSelectableOptionStyles({ theme: { containerStateSelector, type } });

  return (
    <label className={joinClassNames(classes.label, classes[size], classes[variant])}  >
      <input
        onChange={changeHandler}
        className={classes.input}
        {...{ checked, disabled, ref, onBlur, type }}
      />
      <span className={classes.container}>
        {CoreSelectableOptionNode[type]}
      </span>
    </label>
  );
});
