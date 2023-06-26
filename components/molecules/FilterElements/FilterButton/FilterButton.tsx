import { ArrowRight } from '@omegup-school/ui-assets';
import { useFilterStyles } from './FilterButton.styles';
import { ControlledFilterButtonProps } from './FilterButton.types';
import { forwardRef } from 'react';

export const FilterButton = forwardRef(
  (props: ControlledFilterButtonProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, label, showIcon, onChange, value, onBlur } = props;
    const classes = useFilterStyles();
    return (
      <div >
        <div className={`${classes.label}  ${classes[style]} ${classes[size]}`}>
      
        <input
          type="button"
          className={classes.input}
          onChange={(e) => onChange(e.target.checked)}
          {...{ ref, onBlur }}
          checked={value}
        />
        <div className={classes.container}>
          <text className={classes.labelText}>{label}</text>
          {showIcon && (
            <span className={classes.arrow}>
              {' '}
              <ArrowRight bold={true} width={"100%"} />
            </span>
          )}{' '}
        </div>
         </div>
      </div>
    );
  }
);
