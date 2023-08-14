import {
  ControlledSelectContainerProps,
  SelectContainerProps,
} from '@omegup-school/ui-atoms';
import {
  ControlledNakedCheckboxProps,
  NakedCheckboxProps,
} from '@omegup-school/ui-atoms/NakedCheckbox/SimpleTypes';

export type SelectMoleculeProps = Omit<SelectContainerProps , 'children'> & Omit<NakedCheckboxProps , 'variant'> ;
export type ControlledSelectMoleculeProps = Omit<ControlledSelectContainerProps, 'children'> &
  Omit<ControlledNakedCheckboxProps , 'checked' | 'variant'> & { value: boolean };
