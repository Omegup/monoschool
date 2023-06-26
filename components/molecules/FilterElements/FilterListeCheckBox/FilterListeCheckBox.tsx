
import { useFilterListeCheckBoxStyles } from './FilterListeCheckBox.styles';
import { FilterProps } from './FilterListeCheckBox.types';

import { FilterSelect } from '../FilterSelect/FilterSelect';
import { SearchBar } from '../../SearchBar';
import { Ellipse46, Ellipse47, Ellipse48, Ellipse49} from '@omegup-school/ui-assets';

export const FilterListeCheckBox = ({ size,showImage,label }: FilterProps) => {
  const classes = useFilterListeCheckBoxStyles();
  return (

    <div className={`${classes.container} ${classes[size]}`}>
      <SearchBar size={size} displayClose={true} label={label} value={''} onChange={()=>{}} onBlur={()=>{}} style={'solid'}/>
     <FilterSelect  size={size} label={'Bacem achour'} showImage={showImage} value={false} onChange={() => { } } onBlur={() => { } } imageURL={Ellipse47}/>
     <FilterSelect  size={size} label={'Sana Binhamed'} showImage={showImage} value={false} onChange={()=>{}} onBlur={()=>{}} imageURL={Ellipse46}/>
     <FilterSelect  size={size} label={'Atef Chrigui'} showImage={showImage} value={false} onChange={()=>{}} onBlur={()=>{}} imageURL={Ellipse48}/>
     <FilterSelect  size={size} label={'Jihen brahim'} showImage={showImage} value={false} onChange={()=>{}} onBlur={()=>{}} imageURL={Ellipse49}/>
    </div>
    
  );
};
