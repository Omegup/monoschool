
import { useFilterStyles } from './Filter.styles';
import { FilterProps } from './Filter.types';
import { FilterButton } from '../FilterButton/FilterButton';

export const Filter = ({ size, style, }: FilterProps) => {
  const classes = useFilterStyles();
  return (
    <div className={`${classes[style]} ${classes.container} ${classes[size]}`}>
     <FilterButton style={style} size={size} showIcon={true} label={'Apprenant'} value={false} onChange={()=>{}} onBlur={()=>{}}/>
     <FilterButton style={style} size={size} showIcon={true} label={'Classe'} value={false} onChange={()=>{}} onBlur={()=>{}} />
     <FilterButton style={style} size={size} showIcon={false} label={"Facture aujourd'hui"} value={false} onChange={()=>{}} onBlur={()=>{}} />
     <FilterButton style={style} size={size} showIcon={false} label={'Facture ce mois ci'} value={false} onChange={()=>{}} onBlur={()=>{}} />
    </div>
  );
};
