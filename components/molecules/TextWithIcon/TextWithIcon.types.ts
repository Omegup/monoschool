import { ReactNode } from "react";

export interface TextWithIconProps {

}
export interface ControlledTextWithIconProps extends TextWithIconProps {
  text: string;
  icon: ReactNode;
  padding?: number,
  onClick?: () => void;
}
