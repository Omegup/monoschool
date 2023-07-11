import { LabeledCheckBox } from '@omegup-school/ui-atoms/LabeledCheckBox';
import { ControlledCheckbox } from './Checkbox.types';
import { NakedCheckBox } from '@omegup-school/ui-atoms';

export const Checkbox = ({ label, checked, ...rest }: ControlledCheckbox) => {
  return (
    <LabeledCheckBox label={label} checked={checked}>
      <NakedCheckBox checked={checked} {...rest} />
    </LabeledCheckBox>
  );
};
