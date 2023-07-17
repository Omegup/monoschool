import { createContext } from 'react';

export const FieldContext = createContext<{
  disabled?: boolean;
} | null>(null);
