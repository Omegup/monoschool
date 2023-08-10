import { ReactNode } from "react";
import { ChipsVariant } from "./ChipsContainer-styles/chipsContainer-styles.types";
export type ChipsContainerProps = {
  variant: ChipsVariant
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  children:ReactNode;
  icon:JSX.Element;
};
export interface ControlledChipsContainerProps extends ChipsContainerProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onBlur: () => void;
}