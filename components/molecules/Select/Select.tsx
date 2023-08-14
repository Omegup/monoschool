import { NakedCheckBox, SelectContainer } from "@omegup-school/ui-atoms";
import { forwardRef } from "react";
import { ControlledSelectMoleculeProps } from "./Select.types";

const selectToCheckboxSizeAdapter = {
  small: "medium",
  medium: "large",
  large: "xLarge",
} as const;

export const Select = forwardRef(({
  label,
  size,
  variant,
  disabled,
  value,
  onChange,
  onBlur,
}: ControlledSelectMoleculeProps, ref: React.Ref<HTMLInputElement>) => {

  return (
    <SelectContainer  {...{ label, size, variant, disabled }}>
      <NakedCheckBox variant="select" size={selectToCheckboxSizeAdapter[size]} checked={value} {...{ disabled, onBlur, onChange, ref }} />
    </SelectContainer>
  )
});
