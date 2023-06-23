import { ArrowRight } from '@omegup-school/ui-assets';
import { useFilterStyles } from './Filter.styles';
import { ControlledFilterProps, FilterProps } from './Filter.types';
import { widths } from '@omegup-school/ui-atoms/sizes';
import { forwardRef } from 'react';

export const FilterButton = forwardRef(
  (props: ControlledFilterProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, label, showIcon, onChange, value, onBlur } = props;
    const classes = useFilterStyles();
    return (
      <div
        className={`${classes.label}  ${classes[style]} ${classes[size]}`}
      >
        <input
          type="button"
          className={classes.input}
          onChange={(e) => onChange(e.target.checked)}
          {...{ ref, onBlur }}
          checked={value}
        />
        <div className={classes.container}>
          <label className={classes.labelText}>{label}</label>
          <span className={classes.arrow}>
            {showIcon && <ArrowRight bold={true} width={'100%'} />}{' '}
          </span>
          </div>
      </div>
    );
  }
);
