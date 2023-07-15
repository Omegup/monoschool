import { LabeledCheckBoxProps } from '@omegup-school/ui-atoms/LabeledCheckBox/LabeledCheckBox.types';
import { ControlledNakedCheckboxProps } from '@omegup-school/ui-atoms/NakedCheckbox/SimpleTypes';

export type ControlledCheckbox = Omit<LabeledCheckBoxProps, 'children'> &
  ControlledNakedCheckboxProps;
