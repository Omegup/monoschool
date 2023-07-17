import { createContext, useContext } from 'react';

export const createContainerContext = <T>(name: string) => {
  const Context = createContext<T | null>(null);
  const useContainerContext = () => {
    const containerContext = useContext(Context);
    if (!containerContext)
      throw new Error(`${name} context is not defined`);
    return containerContext;
  };
  return { Context, use: useContainerContext };
};
