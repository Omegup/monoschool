import { ReactNode } from "react";

export interface IconContainerProps {
  padding?: number,
  height?: number | string,
  width?: number | string,
}
export interface ControlledIconContainerProps extends IconContainerProps {
  icon: ReactNode;
  onClick?: () => void;
}
