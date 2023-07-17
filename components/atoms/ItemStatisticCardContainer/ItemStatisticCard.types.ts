import { ReactNode } from 'react';

export interface ItemStatisticCardContainerProps {
  fristChildren: ReactNode;
  secandChildren: ReactNode;
  variant: 'success' | 'blue' | 'warning' | 'pink';
}

