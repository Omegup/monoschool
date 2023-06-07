import { FacadeContext } from '@omegup-school/context';
import { useContext } from 'react';

export const useFacade = () => {
  const facade = useContext(FacadeContext);
  if (!facade) throw new Error('Context is not defined');
  return facade;
};
