import { NakedCheckBox } from "../../Internals";
import { CheckboxVariant } from "../../Internals/NakedCheckbox/NakedCheckBox.types";

export const CheckBoxColumn = ({
  variant = 'cell',
  checked,
  onChange,
  disabled,
}: {
  variant?: CheckboxVariant,
  checked: boolean,
  onChange: (checked: boolean) => void,
  disabled: boolean,
}) => {
  return (
    <NakedCheckBox   {...{ onChange, checked, variant, disabled }} />
  )
}
  ;
