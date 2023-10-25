import { LabeledCheckBoxProps } from '@omegup-school/ui-atoms/LabeledCheckBox/LabeledCheckBox.types';
import { ControlledCoreSelectableOptionProps } from '@omegup-school/ui-atoms/CoreSelectableOption/SimpleTypes';

export type ControlledRadio = Omit<LabeledCheckBoxProps, 'children'> &
  Omit<ControlledCoreSelectableOptionProps, 'type'>;
