import { Square, Tick } from '@omegup-school/ui-assets';
import { useSelectStyles } from './SubMenu.styles';
import { ControlledSubMenuProps } from './SubMenu.types';
import { forwardRef } from 'react';
import { ChildMenu } from '../ChildMenu';


export const SubMenu = forwardRef(
  (props: ControlledSubMenuProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, disabled, parentName, items, isOpened, onChange, value, onBlur } = props;
    const classes = useSelectStyles(),
      disabledClass = classes[disabled ? 'disabled' : 'enabled'];


  return (
      <div className={`${classes.container}  ${classes[style]} ${classes[size]} ${disabledClass}`}>
        <label
          tabIndex={-1}
          className={`${classes.parentName}`}>
          {parentName}
        </label>
        {items.map((ch, index) =>
          <div className={`${classes.items}  ${classes[ch.selected ? 'selected' : 'notSelected']}`} key={index} >
            <ChildMenu value={false} onChange={(e) => { ch.selected = true }} onBlur={() => { }} style={'solid'} size={'large'} icon={ch.icon} label={ch.label} id={ch.id} selected={ch.selected} isCollopsed={ch.isCollopsed}/>
          </div>
        )
        }
      </div>
    );
  }
);
