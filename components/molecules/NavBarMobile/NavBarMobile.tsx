import { Square, Tick } from '@omegup-school/ui-assets';
import { useNavBarMobileStyles } from './NavBarMobile.styles';
import { ControlledNavBarMobileProps } from './NavBarMobile.types';
import { forwardRef } from 'react';


export const NavBarMobile = forwardRef(
  (props: ControlledNavBarMobileProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, disabled, onChange, items, value, onBlur } = props;
    const classes = useNavBarMobileStyles(),
      disabledClass = classes[disabled ? 'disabled' : 'enabled'];
    return (
      <div>
        {items.map((ch, index) =>
          <div className={container}>
            <div >
              {ch.icon}
            </div>
            <label>{ch.label}</label>
          </div>
        )}
      </div>
    );
  })
