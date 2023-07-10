import { FilterCheckBoxProps } from '@omegup-school/ui-atoms/FilterCheckBox/FilterCheckBox.types';
import { ControlledNakedCheckboxProps } from '@omegup-school/ui-atoms/NakedCheckbox/SimpleTypes';


export type FilterListeChekboxProps = {
  data:  {
    label:string,
    showImage:boolean,
    imageURL:string,
    onChange:(value:boolean)=>void
    onBlur:()=>void,
    checked:boolean,
    disabled:boolean,
  }[];
};
