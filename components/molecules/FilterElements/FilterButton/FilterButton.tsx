import { ArrowRight } from '@omegup-school/ui-assets';
import { useFilterStyles } from './Filter.styles';
import { FilterProps } from './Filter.types';

export const FilterButton = ({ size, style, label,showIcon }: FilterProps) => {
  const classes = useFilterStyles();
  return (
    
     
      <button className={`${classes.button} ${classes[style]} ${classes[size]}`}  >
        <label className={classes.labelText} >{label}</label> 
        {showIcon &&<span className={classes.arrow}> <ArrowRight bold={true} /></span>}  
      </button>
   
  
  );
};
