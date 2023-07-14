import { CheckboxSize, CheckboxVariant } from "./NakedCheckbox-styles/NakedCheckbox-styles.types";



export interface NakedCheckboxProps {
  variant: CheckboxVariant;
  size: CheckboxSize;
  disabled?: boolean;
}

export interface ControlledNakedCheckboxProps extends NakedCheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}
