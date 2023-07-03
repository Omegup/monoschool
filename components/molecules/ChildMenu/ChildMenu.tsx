import { Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './ChildMenu.styles';
import { ControlledChildMenuProps } from './ChildMenu.types';
import { Children, forwardRef } from 'react';
import { colors } from '@omegup-school/ui-atoms/colors';


export const ChildMenu = forwardRef(
  (props: ControlledChildMenuProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, disabled, icon, isCollopsed, id, label, onChange, value, onBlur, selected } = props;
    const classes = useSelectStyles(),
      disabledClass = classes[disabled ? 'disabled' : 'enabled'];
    const selectedClass = classes[selected ? 'selected' : 'notSelected'];
    return (
      <div className={`${classes.container} ${classes[style]} ${classes[size]} ${selectedClass}`}
      >
        <div className={classes.icon} >
          {icon}
        </div>
        {!isCollopsed && <label className={`${classes.label} `}
          tabIndex={-1}
        >{label}
        </label>}

      </div>
    );
  }
);
