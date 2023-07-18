import { createContainerContext } from './createContainerContext';

export const { Context: FieldContext, use: useFieldContext } =
  createContainerContext<{ disabled: boolean }>('field container');
