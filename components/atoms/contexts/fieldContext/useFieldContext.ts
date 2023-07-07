import { useContext } from 'react';
import { ContainerStateContext } from './fieldContext';

export const useFieldContextSelector = () => {
  const FieldContextSelector = useContext(ContainerStateContext);
  if (!FieldContextSelector)
    throw new Error('container stateSelector container Context is not defined');
  return FieldContextSelector;
};
