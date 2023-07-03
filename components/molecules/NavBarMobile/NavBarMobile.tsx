import { Square, Tick } from '@omegup-school/ui-assets';
import { useNavBarMobileStyles } from './NavBarMobile.styles';
import { ControlledNavBarMobileProps } from './NavBarMobile.types';
import { forwardRef } from 'react';
import { ChildMenu } from '../ChildMenu';


export const NavBarMobile = forwardRef(
  (props: ControlledNavBarMobileProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, onChange, items, value, onBlur } = props;
    const classes = useNavBarMobileStyles();

    return (


      <div className={`${classes.container}`}>
        {items.map((ch, index) =>
          <div className={classes.itemMenu}   key={index} >
            <ChildMenu value={false} onChange={(e) => { ch.selected = true }}
              onBlur={() => { }}
              style={'solid'}
              size={'large'}
              icon={ch.icon}
              label={ch.label}
              id={ch.id}
              selected={ch.selected}
              viewMode='mobile'
               />
          </div>
        )
        }
      </div>

    );
  })
