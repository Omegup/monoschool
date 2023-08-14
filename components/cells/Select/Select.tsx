import {
  Select as SelectMolecule,
} from '@omegup-school/ui-molecules/Select';
import { SelectMoleculeProps } from '@omegup-school/ui-molecules/Select/Select.types';
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
> extends SelectMoleculeProps {
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
  const { size, variant, disabled, label, name, control  } = props;
  const { field } = useController({ name, control });
  return <SelectMolecule {...{ size, variant, disabled, label, ...field }} />;
};
