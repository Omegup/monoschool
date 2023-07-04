import { ReactNode } from "react";

export interface DoubleTextProps {

}
export interface ControlledIconWithDoubleTextProps extends DoubleTextProps {
  text: string;
  subText: string;
  icon: ReactNode,
  onClick?: () => void;
}
