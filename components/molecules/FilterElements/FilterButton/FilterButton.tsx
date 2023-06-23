import { ArrowRight } from '@omegup-school/ui-assets';
import { useFilterStyles } from './Filter.styles';
import { ControlledFilterProps, FilterProps } from './Filter.types';
import { widths } from '@omegup-school/ui-atoms/sizes';
import { forwardRef } from 'react';

export const FilterButton =  forwardRef(
  (props: ControlledFilterProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, style, label,showIcon, onChange, value, onBlur } = props;
  const classes = useFilterStyles();
  return (
    <div className={`${classes.container}  ${classes[style]} ${classes[size]}`}>
      <button className={`${classes.button}`}  >
        <label className={classes.labelText} >{label}</label> 
        <span className={classes.arrow}>{showIcon && <ArrowRight bold={true} width={"100%"} />}  </span>
      </button>
      </div>
  );
})
