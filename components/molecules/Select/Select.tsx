import { forwardRef } from 'react';
import { NakedCheckBox } from '../Internals';
import { joinClassNames } from '../common/utils';
import { ContainerStateContext } from '../contexts/pointer';
import { useSelectStyles } from './Select.styles';
import { ControlledSelectProps } from './Select.types';

export const Select = forwardRef(
  (props: ControlledSelectProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, disabled = false, label, onChange, value, onBlur } = props;
    const classes = useSelectStyles(),
      disabledClass = classes[disabled ? 'disabled' : 'enabled'];
    return (
      <label
        tabIndex={-1}
        className={joinClassNames(
          classes.label,
          classes[style],
          classes[size],
          disabledClass
        )}>
        <ContainerStateContext.Provider value={classes.label}>
          <div className={classes.container}>
            <NakedCheckBox
              variant="select"
              checked={value}
              {...{ disabled, ref, onBlur, size, onChange }}
            />
            <span className={classes.labelText}>{label}</span>
          </div>
        </ContainerStateContext.Provider>

      </label>
    );
  }
);
