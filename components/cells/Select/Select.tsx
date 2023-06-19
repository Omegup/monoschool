import {
  SelectProps as SelectPropsMolecule,
  Select as SelectMolecule,
} from '@omegup-school/ui-molecules';
import {
  Control,
  FieldPathValue,
  FieldValues,
  Path,
  useController,
} from 'react-hook-form';

export interface SelectProps<
  TName extends Path<TFieldValues>,
  TFieldValues extends FieldValues
> extends SelectPropsMolecule {
  name: TName;
  control: Control<TFieldValues>;
  _: FieldPathValue<TFieldValues, TName> extends boolean ? true : never;
}

// use context hook with path
export const Select = <
  TName extends Path<TFieldValues>,
  TFieldValues extends FieldValues
>(
  props: SelectProps<TName, TFieldValues>
) => {
  const { size, style, disabled, label, name, control } = props;
  const { field } = useController({ name, control });
  return <SelectMolecule {...{ size, style, disabled, label, ...field }} />;
};
