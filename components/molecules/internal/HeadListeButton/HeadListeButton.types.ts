
import { ReactNode } from "react";

export interface HeadListeButtonProps {
label:string
}
export interface ControlledHeadListeButtonProps extends HeadListeButtonProps {
  children: ReactNode;
}
