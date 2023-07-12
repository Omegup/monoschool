import { joinClassNames } from '@omegup-school/ui-configs/typography';
import { useChipsStyles } from './ChipsContainer.styles';
import { ControlledChipsContainerProps } from './ChipsContainer.types';
import { forwardRef } from 'react';
import { useContainerStateSelector } from '../contexts/pointer';

export const ChipsContainer = forwardRef(
  (props: ControlledChipsContainerProps, ref: React.Ref<HTMLInputElement>) => {
    const {
      size,
      variant,
      disabled,
      onChange,
      onBlur,
      checked,
      children,
      icon,
    } = props;

    
    const classes = useChipsStyles();
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.checked);
    };
    return (
      <label
        onClick={(event) => event.stopPropagation()}
        className={joinClassNames(
          classes.label,
          classes[variant],
          classes[size]
        )}
      >
        <input
          type="checkbox"
          className={classes.input}
          onChange={changeHandler}
          {...{ ref, onBlur }}
          {...{ checked, disabled, ref, onBlur }}
        />
        <div className={classes.container}>
          <span className={classes.icon}>{icon}</span>
          {children}
        </div>
      </label>
    );
  }
);
