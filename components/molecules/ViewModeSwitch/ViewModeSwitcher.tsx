import { useViewModeSwitcherStyles } from './ViewModeSwitcher.styles';
import { ControlledViewModeSwitcherProps } from './ViewModeSwitcher.types';
import { forwardRef } from 'react';


export const ViewModeSwitcher = forwardRef(
  (props: ControlledViewModeSwitcherProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, onChange, elementLeft, elementRight, onBlur, name, value } = props;
    const classes = useViewModeSwitcherStyles()
    const checkedClass = classes[value ? 'checked' : 'notChecked'];

    return (
      <div className={classes.container}>
        <div className={`${classes.elementLeft} ${checkedClass} `}>
          <input type="radio"
            name={name}
            id={elementLeft.id}
            checked={value}
            className={classes.input}
            onChange={(e) => onChange(e.target.checked)}
            {...{ ref, onBlur }}
          />
          {elementLeft.icon}
        </div>

        <div className={classes.elementRight}>
          <input type="radio"
            name={name}
            id={elementRight.id}
            checked={!value}
            className={classes.input}
            onChange={(e) => onChange(e.target.checked)}
            {...{ ref, onBlur }}
          />

          {elementRight.icon}
        </div>
      </div>
    );
  }
);
