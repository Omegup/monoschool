import { ReactNode } from 'react';

export interface DisplaySwitcherOnHoverEffectProps {
  children: [ReactNode, ReactNode];
  width: string | number;
  height: string | number;
  hovrable?: Boolean;
}
