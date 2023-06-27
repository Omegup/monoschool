import { Square, Tick, WifiSquare } from '@omegup-school/ui-assets';
import { useSelectStyles } from './SubMenu.styles';
import { ControlledSubMenuProps } from './SubMenu.types';
import { forwardRef } from 'react';
import { ChildMenu } from '../ChildMenu';


export const SubMenu = forwardRef(
  (props: ControlledSubMenuProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, disabled, parentName, children, isOpened, onChange, value, onBlur } = props;
    const classes = useSelectStyles(),
      disabledClass = classes[disabled ? 'disabled' : 'enabled'];

    const tab = [
      { icon: <Tick color='red' width='36' height='36' />, label: "Présence des elèves", slected: false, style: "solid", size: "medium" ,id:1},
      { icon: <WifiSquare  width='36' height='36' />, label: "Rapports des élèves", slected: false, style: "solid", size: "medium",id:2 },
      { icon: <Square width='36' height='36' />, label: "Présence des enseigants", slected: false, style: "solid", size: "medium" ,id:3}];
    return (
      <div>
        <label
          tabIndex={-1}
          className={`${classes.parentName} ${classes[style]} ${classes[size]} ${disabledClass}`}>
          {parentName}</label>
        <br></br>
     
          {tab.map((ch) =>
            <ChildMenu value={false} onChange={() => { }} onBlur={() => { }} style={'solid'} size={'large'} icon={ch.icon} label={ch.label} id={ch.id}/>
                    )
          }
             </div>
    );
  }
);
