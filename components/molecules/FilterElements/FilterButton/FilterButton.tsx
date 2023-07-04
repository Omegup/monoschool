import { useFilterStyles } from './FilterButton.styles';
import { ControlledFilterButtonProps } from './FilterButton.types';
import { forwardRef } from 'react';


export const FilterButton = forwardRef(
  (props: ControlledFilterButtonProps, ref: React.Ref<HTMLInputElement>) => {
    const { label, showIcon,icon, onChange, value, onBlur } = props;
    const classes = useFilterStyles();
    return (
      <div >
        <div className={`${classes.label} `}>
      
        <input
          type="checkbox"
          className={classes.input}
          onChange={(e) => onChange(e.target.checked)}
          {...{ ref, onBlur }}
          checked={value}
        />
        <div className={classes.container}>
          <text className={classes.labelText}>{label}</text>
          {showIcon && (
            <span className={classes.iconContainer}>
              <span className={classes.icon}>
              {icon}
            </span>
            </span>
          )}
        </div>
         </div>
      </div>
    );
  }
);
