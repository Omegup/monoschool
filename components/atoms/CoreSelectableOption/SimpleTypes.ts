import { SelectableOptionSize, SelectableOptionType, SelectableOptionVariant } from "./CoreSelectableOption-styles/CoreSelectableOption-styles.types";

export interface CoreSelectableOptionProps {
  variant: SelectableOptionVariant;
  size: SelectableOptionSize;
  type: SelectableOptionType;
}

export interface ControlledCoreSelectableOptionProps extends CoreSelectableOptionProps {
  checked: boolean;
  disabled: boolean;
  onChange: (value: boolean) => void;
  ref?: React.Ref<HTMLInputElement>;
  onBlur: () => void;
}
