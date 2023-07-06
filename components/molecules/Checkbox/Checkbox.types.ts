import { LabeledCheckBoxProps } from '@omegup-school/ui-atoms/LabeledCheckBox/LabeledCheckBox.types';
import { ControlledNakedCheckboxProps } from '@omegup-school/ui-atoms/NakedCheckbox/NakedCheckBox.types';

export type ControlledCheckbox = Omit<LabeledCheckBoxProps, 'checkBox'> &
  ControlledNakedCheckboxProps;
