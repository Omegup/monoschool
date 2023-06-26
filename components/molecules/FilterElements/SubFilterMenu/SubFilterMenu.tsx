
import { useFilterListeCheckBoxStyles } from './SubFilterMenu.styles';
import { SubFilterMenuProps } from './SubFilterMenu.types';

import { FilterCheckBox } from '../FilterCheckBox/FilterCheckBox';
import { SearchBar } from '../../SearchBar';


export const SubFilterMenu = ({ size,showImage,label,child }: SubFilterMenuProps) => {
  const classes = useFilterListeCheckBoxStyles();
  return (

    <div className={`${classes.container} ${classes[size]}`}>
      <SearchBar size={size} displayClose={true} label={label} value={''} onChange={()=>{}} onBlur={()=>{}} style={'solid'}/>
      {child.map((item)=>(
     <FilterCheckBox  size={item.size} label={item.label} showImage={showImage} value={item.value} onChange={item.onChange } onBlur={item.onBlur } imageURL={item.imageURL}/>
      ))}
     </div>
    
  );
};
