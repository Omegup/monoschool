import { useViewModeSwitcherStyles } from './ViewModeSwitcher.styles';
import { ControlledViewModeSwitcherProps } from './ViewModeSwitcher.types';
import { forwardRef } from 'react';


export const ViewModeSwitcher = forwardRef(
  (props: ControlledViewModeSwitcherProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, onChange, elementLeft, elementRight, onBlur, name } = props;
    const classes = useViewModeSwitcherStyles()

    return (
      <div className={classes.container}>
        <div className={classes.elementLeft}>
          <input type="radio"
            name={name}
            id={elementLeft.id}
            checked={elementLeft.value}
            className={classes.input}
            onChange={(e) => onChange(e.target.checked)}
            {...{ ref, onBlur }}
          />
          {elementLeft.icon}
          <span className={classes.checkmark} ></span>
        </div>

        <div className={classes.elementRight}>
          <input type="radio"
            name={name}
            id={elementRight.id}
            checked={elementRight.value}
            className={classes.input}
            onChange={(e) => onChange(e.target.checked)}
            {...{ ref, onBlur }}
          />
          {elementRight.icon}
          <span className={classes.checkmark} ></span>
        </div>
      </div>
    );
  }
);
