import { ReactNode } from "react";
export type ChipsContainerProps = {
  variant:  'border' | 'flat'
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