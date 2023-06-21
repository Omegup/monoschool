
import { useFilterListeCheckBoxStyles } from './FilterListeCheckBox.styles';
import { FilterProps } from './FilterListeCheckBox.types';

import { FilterSelect } from '../FilterSelect/FilterSelect';
import { SearchBar } from '../../SearchBar';

export const FilterListeCheckBox = ({ size, style,showImage }: FilterProps) => {
  const classes = useFilterListeCheckBoxStyles();
  return (

    <div className={`${classes[style]} ${classes.container} ${classes[size]}`}>
      <SearchBar style={style} size={size} showIcon={false} label={''}/>
     <FilterSelect style={style} size={size} label={'Bacem achour'} showImage={showImage} imageURL={''}/>
     <FilterSelect style={style} size={size} label={'Sana Binhamed'} showImage={showImage} imageURL={''}/>
     <FilterSelect style={style} size={size} label={'Atef Chrigui'} showImage={showImage} imageURL={''}/>
     <FilterSelect style={style} size={size} label={'Jihen brahim'} showImage={showImage} imageURL={''}/>
    </div>
    
  );
};
