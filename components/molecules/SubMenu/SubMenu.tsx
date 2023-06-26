import { Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './SubMenu.styles';
import { ControlledSubMenuProps } from './SubMenu.types';
import { forwardRef } from 'react';


export const SubMenu = forwardRef(
  (props: ControlledSubMenuProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, disabled, children, parentName, opened, onChange, value, onBlur } = props;
    const classes = useSelectStyles(),
      disabledClass = classes[disabled ? 'disabled' : 'enabled'];
    return (
      <div>
        <label
          tabIndex={-1}
          className={`${classes.parentName} ${classes[style]} ${classes[size]} ${disabledClass}`}
        />
        <ul>
          {/* {children.map(ch =>
            <li>ch.label</li>)} */}
            <li>children[0].label</li>
            <li>children[1].label</li>
        </ul>
      </div>
 );
  }
);
