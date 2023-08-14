import { joinClassNames } from '@omegup-school/ui-configs/typography';
import { ContainerStateContext } from '../contexts/pointer';
import { useSelectStyles } from './SelectContainer.styles';
import { ControlledSelectContainerProps } from './SelectContainer.types';

export const SelectContainer = ({ size, variant, disabled, label, children }: ControlledSelectContainerProps) => {
  const classes = useSelectStyles() ;
  return (
    <label
      className={joinClassNames(
        classes.label,
        classes[variant],
        classes[size],
        disabled && classes.disabled,
      )}
    >
      <div className={classes.container} >
        <ContainerStateContext.Provider value={classes.label}>
          {children}
        </ContainerStateContext.Provider>
        <span className={classes.labelText}>{label}</span>
      </div>
    </label>
  );
}
