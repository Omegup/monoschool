import { spacing } from "@omegup-school/ui-configs/sizes";
import { ReactNode } from "react";

export interface ItemStatisticCardProps {
  icon:JSX.Element;
  label:string;
  amount:number;
  percentage:number;
  variant:"success"|"blue"|"warning"|"pink"
}
export interface ControlledItemStatisticCardProps extends ItemStatisticCardProps {

}
