import { spacing } from "@omegup-school/ui-atoms/sizes";
import { ReactNode } from "react";

export interface IconContainerProps {
  padding?: keyof typeof spacing,
  height?: number | string,
  width?: number | string,
}
export interface ControlledIconContainerProps extends IconContainerProps {
  icon: ReactNode;
  onClick?: () => void;
}
