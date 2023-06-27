import { Square, Tick, WifiSquare } from '@omegup-school/ui-assets';
import { useSelectStyles } from './SubMenu.styles';
import { ControlledSubMenuProps } from './SubMenu.types';
import { forwardRef } from 'react';
import { ChildMenu } from '../ChildMenu';


export const SubMenu = forwardRef(
  (props: ControlledSubMenuProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, disabled, parentName, items, isOpened, onChange, value, onBlur } = props;
    const classes = useSelectStyles(),
      disabledClass = classes[disabled ? 'disabled' : 'enabled'];

    const tab = [
      { icon: <Tick color='red' width='24' height='24' />, label: "Présence des elèves", slected: false, style: "solid", size: "medium" ,id:1},
      { icon: <WifiSquare  width='24' height='24' />, label: "Rapports des élèves", slected: false, style: "solid", size: "medium",id:2 },
      { icon: <Square width='24' height='24' />, label: "Présence des enseigants", slected: false, style: "solid", size: "medium" ,id:3}];
    return (
      <div className={classes.container}>
        <label
          tabIndex={-1}
          className={`${classes.parentName} ${classes[style]} ${classes[size]} ${disabledClass}`}>
          {parentName}</label>
           
          {items.map((ch,index) =>
         <div className={classes.items} key={index}>
          <ChildMenu    value={false} onChange={() => { }} onBlur={() => { }} style={'solid'} size={'large'} icon={ch.icon} label={ch.label} id={ch.id}/>
           </div>  
            )
          }
             </div>
    );
  }
);
