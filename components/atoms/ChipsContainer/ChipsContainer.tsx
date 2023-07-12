import { joinClassNames } from '@omegup-school/ui-configs/typography';
import { useSelectStyles } from './ChipsContainer.styles';
import { ControlledChipsContainerProps } from './ChipsContainer.types';
import { forwardRef } from 'react';

export const ChipsContainer = forwardRef(
  (props: ControlledChipsContainerProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, variant, disabled, onChange, onBlur, checked, children, icon } =
      props;
    const classes = useSelectStyles(),
      disabledClass = classes[disabled ? 'disabled' : 'enabled'];
      const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
      };
    return (
      <label
          className={joinClassNames(
          classes.label,
          classes[variant],
          classes[size],
          disabledClass
        )}
      >
        <input
          type="checkbox"
          className={classes.input}
          onChange={changeHandler}
          {...{ ref, onBlur }}
          checked={checked}
        />
          <div className={classes.container}>
            <span className={classes.icon}>{icon}</span>
            {children}
          </div>
        
      </label>
    );
  }
);
