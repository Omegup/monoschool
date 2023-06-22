import { useContext } from 'react';
import { ContainerStateContext } from './ContainerStateContext';

export const useContainerStateSelector = () => {
  const containerStateSelector = useContext(ContainerStateContext);
  if (!containerStateSelector) throw new Error('container stateSelector container Context is not defined');
  return containerStateSelector;
};
