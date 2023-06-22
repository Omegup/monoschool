import { OutlinedInput as InputMolecule } from '@omegup-school/ui-molecules/SignIn/Input';
import { OutlinedInputProps as InputPropsMolecule } from '@omegup-school/ui-molecules/SignIn/Input.types';
import {
  Control,
  FieldPathValue,
  FieldValues,
  Path,
  useController,
} from 'react-hook-form';

export interface OutlinedInputProps<
  TName extends Path<TFieldValues>,
  TFieldValues extends FieldValues
> extends InputPropsMolecule {
  name: TName;
  control: Control<TFieldValues>;
  _: FieldPathValue<TFieldValues, TName> extends string ? true : never;
}

// use context hook with path
export const OutlinedInput = <
  TName extends Path<TFieldValues>,
  TFieldValues extends FieldValues
>(
  props: OutlinedInputProps<TName, TFieldValues>
) => {
  const { label, name, control, placeholder, type } = props;
  const { field, fieldState, formState } = useController({ name, control });

  return (
    <>
      <InputMolecule
        {...{
          placeholder,
          type,
          label,
          ...field,
          ...(formState.isLoading
            ? { disabled: true, placeholder: '...', value: '' }
            : {}),
        }}
      />
      {fieldState.error && <span>{fieldState.error.message}</span>}
    </>
  );
};
