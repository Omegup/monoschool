import { CheckboxSize, CheckboxVariant } from "./NakedCheckbox-styles/NakedCheckbox-styles.types";



export interface NakedCheckboxProps {
  variant: CheckboxVariant;
  size: CheckboxSize;
}

export interface ControlledNakedCheckboxProps extends NakedCheckboxProps {
  checked: boolean;
  disabled: boolean;
  onChange: (value: boolean) => void;
  ref?: React.Ref<HTMLInputElement>;
  onBlur: () => void;
}
