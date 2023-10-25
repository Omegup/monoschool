import { CoreSelectableOption } from '@omegup-school/ui-atoms';
import { LabeledCheckBox } from '@omegup-school/ui-atoms/LabeledCheckBox';
import { ControlledCheckbox } from './Checkbox.types';

export const Checkbox = ({ label, checked, ...rest }: ControlledCheckbox) => {
  return (
    <LabeledCheckBox label={label} checked={checked}>
      <CoreSelectableOption type='checkbox' checked={checked} {...rest} />
    </LabeledCheckBox>
  );
};
