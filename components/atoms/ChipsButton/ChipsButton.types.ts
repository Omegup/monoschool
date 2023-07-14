import { MouseEventHandler } from "react";

export type ChipsButtonProps = {
  size: 'large' | 'medium' | 'small';
  ClearIcon: JSX.Element;
};
export interface ControlledChipsButtonProps extends ChipsButtonProps {
  onClear: (event:MouseEventHandler<HTMLButtonElement>)=>void ;
}
