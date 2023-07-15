import { useContext } from 'react';
import { FieldContext } from './fieldContext';

export const useFieldContextSelector = () => {
  const FieldContextSelector = useContext(FieldContext);
  if (!FieldContextSelector)
    throw new Error('container stateSelector container Context is not defined');
  return FieldContextSelector;
};
