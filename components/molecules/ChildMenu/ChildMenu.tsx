import { Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './ChildMenu.styles';
import { ControlledChildMenuProps } from './ChildMenu.types';
import { Children, forwardRef } from 'react';
import { colors } from '@omegup-school/ui-atoms/colors';


export const ChildMenu = forwardRef(
  (props: ControlledChildMenuProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, disabled, Icon, label, onChange, value, onBlur } = props;
    const classes = useSelectStyles(),
      disabledClass = classes[disabled ? 'disabled' : 'enabled'];
     return (
      <div>
         <label
          tabIndex={-1}
          className={`${classes.label} ${classes[style]} ${classes[size]} ${disabledClass}`}
        >{label}
        </label>
      </div>
    );
  }
);
