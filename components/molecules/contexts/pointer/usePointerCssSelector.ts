import { useContext } from 'react';
import { ContainerStateContext } from './ContainerStateContext';

export const useContainerStateSelector = () => {
  const hover = useContext(ContainerStateContext);
  if (!hover) throw new Error('Hover Container Context is not defined');
  return hover;
};
