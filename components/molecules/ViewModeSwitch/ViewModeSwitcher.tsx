 import { useViewModeSwitcherStyles } from './ViewModeSwitcher.styles';
import { ControlledViewModeSwitcherProps } from './ViewModeSwitcher.types';
import { forwardRef } from 'react';


export const ViewModeSwitcher = forwardRef(
  (props: ControlledViewModeSwitcherProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, onChange, elements, onBlur,name } = props;
    const classes = useViewModeSwitcherStyles()
     
    return (
    <div className={classes.container}>
 {elements.map((el, index) =>
 <div key={index} className={classes.element} >
  <input
          type="radio"
          name={name}
          id={el.id}
          checked={el.value}
          className={classes.input}
          onChange={(e) => onChange(e.target.checked)}
          {...{ ref, onBlur }}
                />
        {el.icon}
        </div>
)
      }
    </div>
      
   
    );
  }
);
