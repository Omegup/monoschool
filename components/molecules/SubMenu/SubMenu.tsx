
import { useSelectStyles } from './SubMenu.styles';
import { ControlledSubMenuProps } from './SubMenu.types';
import { forwardRef } from 'react';
import { ChildMenu } from '../ChildMenu';


export const SubMenu = forwardRef(
  (props: ControlledSubMenuProps,
    ref: React.Ref<HTMLDivElement>) => {
    const { size, parentName, items,  onChange, viewMode, onBlur, isCollopsed } = props;
    const classes = useSelectStyles()
  
    const vieModeClassContainer = classes[viewMode == 'mobile' ? 'mobile' : 'container']

    return (
      <div ref={ref} className={`${classes.container}  ${classes[size]} `}>
        {viewMode !== 'mobile' && <label
          tabIndex={-1}
          className={`${classes.parentName}`}>
          {parentName}
        </label>}
        <div className={`${classes.itemsList}  `} >

          {items.map((ch, index) =>
            <ChildMenu
              key={index}
              onChange={(e) => { ch.selected = true }}
              onBlur={() => { }}
              size={size}
              icon={ch.icon}
              label={ch.label}
              id={ch.id}
              selected={ch.selected}
              isCollopsed={isCollopsed}
            />
          )
          }
        </div>

      </div>
    );
  }
);
