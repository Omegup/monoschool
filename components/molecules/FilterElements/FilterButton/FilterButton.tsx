import { useFilterStyles } from './FilterButton.styles';
import { ControlledFilterButtonProps } from './FilterButton.types';
import { forwardRef } from 'react';


export const FilterButton = forwardRef(
  (props: ControlledFilterButtonProps, ref: React.Ref<HTMLDivElement>) => {
    const { label, showIcon,icon, onClick, onBlur } = props;
    const classes = useFilterStyles();
    return (
        <div  {...ref} className={`${classes.label} `}>
        <input
          type="button"
          className={classes.input}
          onClick={onClick}
          {...onBlur}
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
    );
  }
);
