import { MouseEventHandler } from "react";

export type ChipsButtonProps = {
  size: 'large' | 'medium' | 'small';
  icon: JSX.Element;
};
export interface ControlledChipsButtonProps extends ChipsButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement> ;
}
