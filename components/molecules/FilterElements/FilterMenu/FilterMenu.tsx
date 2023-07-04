
import { useFilterStyles } from './FilterMenu.styles';
import { FilterMenuProps } from './FilterMenu.types';
import { FilterButton } from '../FilterButton/FilterButton';

export const FilterMenu = ({ size, style,child }: FilterMenuProps) => {
  const classes = useFilterStyles();
  return (
    <div className={`${classes[style]} ${classes.container} ${classes[size]}`}>
       
     
       {child.map((item,index)=>(
        <>
        {index!=0 ?<div className={classes.line}></div> :<></>}
        <FilterButton  showIcon={item.showIcon} label={item.label} value={item.value} onChange={item.onChange} onBlur={item.onBlur} icon={item.icon}/>
       </>
       ))}
     
      
     
    </div>
  );
};
