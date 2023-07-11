import {MouseEvent,MouseEventHandler,ReactNode} from 'react';

export interface FilterButtonProps {
  active?: boolean;
}
export interface ControlledFilterButtonProps extends FilterButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLDivElement> ;
}
