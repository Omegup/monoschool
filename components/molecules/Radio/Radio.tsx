import { CoreSelectableOption } from '@omegup-school/ui-atoms';
import { LabeledCheckBox } from '@omegup-school/ui-atoms/LabeledCheckBox';
import { ControlledRadio } from './Radio.types';

export const Radio = ({ label, checked,  ...rest }: ControlledRadio) => {
  return (
    <LabeledCheckBox label={label} checked={checked}>
      <CoreSelectableOption type='radio' checked={checked} {...rest} />
    </LabeledCheckBox>
  );
};
