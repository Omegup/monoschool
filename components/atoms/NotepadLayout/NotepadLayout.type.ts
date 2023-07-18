import { ReactNode } from 'react';

export interface NotepadLayoutProps {
  variant: 'spaced' | 'condensed';
  iconWithText:ReactNode
  children: [ReactNode, ReactNode];
}
