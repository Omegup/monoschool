import { ReactNode } from "react"

export type DialogProps = {
  backdrop?: boolean
  coords: {
    top: number
    left: number
  }
}
export interface ControlledDialogProps extends DialogProps {
  children: ReactNode | ReactNode[];
}
