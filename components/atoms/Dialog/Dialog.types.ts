import { ReactNode } from 'react';

export type DialogProps = {
  backdrop?: boolean
  coords: {
    top: number | string
    left: number | string
  }
}
export interface ControlledDialogProps extends DialogProps {
  children: ReactNode | ReactNode[];
}
