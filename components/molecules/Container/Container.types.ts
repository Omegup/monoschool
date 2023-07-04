import { ReactNode } from "react";

export interface ContainerProps {
  paddingInline?: number,
  paddingBlock?: number,
  gap?: number,
  direction?: 'column' | 'row' | 'reverse-row' | 'reverse-column',
  alignItems?: 'center' | 'start' | 'end'
  justifyContent?: 'center' | 'start' | 'end'
}
export interface ControlledContainerProps extends ContainerProps {
  children: ReactNode[];
}
