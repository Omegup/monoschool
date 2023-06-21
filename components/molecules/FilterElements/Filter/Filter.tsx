import { ArrowRight } from '@omegup-school/ui-assets';
import { useFilterStyles } from './Filter.styles';
import { FilterProps } from './Filter.types';

export const FilterButton = ({ size, style, label,showIcon }: FilterProps) => {
  const classes = useFilterStyles();
  return (
    <div 
    className={`${classes[style]} ${classes[size]}`}
     >
      <div className={classes.container}>
      <button className={classes.button}  >
        <label className={classes.labelText} >{label}</label> 
        {showIcon &&<span className={classes.arrow}> <ArrowRight width="100%"/></span>}  
      </button>
    </div>
    </div>
  );
};
