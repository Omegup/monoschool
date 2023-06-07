import { createContext } from 'react';
import { Facade } from '@omegup-school/facade';

export const FacadeContext = createContext<Facade | null>(null);
