import { Square, Tick } from '@omegup-school/ui-assets';
import { useViewModeSwitcherStyles } from './ViewModeSwitcher.styles';
import { ControlledViewModeSwitcherProps } from './ViewModeSwitcher.types';
import { forwardRef } from 'react';


export const ViewModeSwitcher = forwardRef(
  (props: ControlledViewModeSwitcherProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, onChange, elements, onBlur,name } = props;
    const classes = useViewModeSwitcherStyles()
     
    return (
    <div>
 {elements.map((el, index) =>
 <div className={`${classes.items}  ${classes[ch.selected ? 'selected' : 'notSelected']}`} key={index} >
  <input
          type="radio"
          name={name}
          id={el.id}
          checked={el.value}
          className={classes.input}
          onChange={(e) => onChange(e.target.checked)}
          {...{ ref, onBlur }}
        
        />
        </div>
)
      }
    </div>
      
   
    );
  }
);
