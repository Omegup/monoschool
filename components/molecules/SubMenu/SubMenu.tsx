import { Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './SubMenu.styles';
import { ControlledSubMenuProps } from './SubMenu.types';
import { forwardRef } from 'react';
import { ChildMenu } from '../ChildMenu';


export const SubMenu = forwardRef(
  (props: ControlledSubMenuProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, disabled, parentName, children, opened, onChange, value, onBlur } = props;
    const classes = useSelectStyles(),
      disabledClass = classes[disabled ? 'disabled' : 'enabled'];

    const tab = [
      { Icon: <Tick width='36' height='36' />, label: "First Element", slected: false, style: "solid", size: "medium" },
      { Icon: <Square width='36' height='36' />, label: "Second Element", slected: false, style: "solid", size: "medium" },
      { Icon: <Square width='36' height='36' />, label: "Second Element", slected: false, style: "solid", size: "medium" }];
    return (
      <div>
        <label
          tabIndex={-1}
          className={`${classes.parentName} ${classes[style]} ${classes[size]} ${disabledClass}`}>
          {parentName}</label>
        <br></br>
     
          {tab.map((ch) =>
         
              <a href="#">
                <ChildMenu value={false} onChange={() => { }} onBlur={() => { }} style={'solid'} size={'large'} Icon={ch.Icon} label={ch.label} />
              </a>
          )
          }

       
      </div>
    );
  }
);
