import { ReactNode } from 'react';

export type FieldLabelLayoutProps = {
  variant: 'spaced' | 'condensed';
  children: [ReactNode, ReactNode];
};
