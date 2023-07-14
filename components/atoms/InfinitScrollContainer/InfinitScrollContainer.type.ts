import { spacing } from '@omegup-school/ui-configs/sizes';
import { ReactNode } from 'react';

export interface InfinitScrollContainerProps {
  paddingInline?: keyof typeof spacing;
  paddingBlock?: keyof typeof spacing;
  gap?: keyof typeof spacing;
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse';
  alignItems?: 'center' | 'start' | 'end';
  justifyContent?: 'center' | 'start' | 'end';
  children: ReactNode[];
  width: number | string;
  height: number | string;
  ref: React.Ref<HTMLDivElement>;
  numberOfItemToLoad: number;
  onScrollEndReach: (itemsNumber: number) => void;
  itemsNumber: number;
}
