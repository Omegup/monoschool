import { useViewModeSwitcherStyles } from './ViewModeSwitcher.styles';
import { ControlledViewModeSwitcherProps } from './ViewModeSwitcher.types';
import { forwardRef } from 'react';


export const ViewModeSwitcher = forwardRef(
  (props: ControlledViewModeSwitcherProps, ref: React.Ref<HTMLInputElement>) => {
    const { onChange, elementLeft, elementRight, onBlur, name, isChecked } = props;
    const classes = useViewModeSwitcherStyles()
    const checkedClassRight = classes[isChecked ? 'checked' : 'notChecked'];
    const checkedClassLeft = classes[isChecked ? 'notChecked' : 'checked'];

    return (
      <div className={ `${classes.container} `}>
        <div className={`${classes.elementLeft} ${checkedClassLeft} ${classes.element} `}>
          <input type="radio"
            name={name}
            id="elementLeft"
            className={classes.input}
            checked={isChecked}
            onChange={(e) => onChange(e.target.checked)}
            {...{ ref, onBlur }}
          />
          {elementLeft.icon}
        </div>
        <div className={`${classes.elementRight} ${checkedClassRight} ${classes.element} `}>
          <input type="radio"
            name={name}
            checked={!isChecked}
            id="elementRight"
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
