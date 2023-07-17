import { ReactNode } from 'react';

export interface FieldLabelLayoutProps {
  variant: 'spaced' | 'condensed';
  children: [ReactNode, ReactNode];
}
