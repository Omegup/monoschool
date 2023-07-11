import { spacing } from "@omegup-school/ui-configs/sizes";
import { ReactNode } from "react";

export interface CardContainerFeeProps {
  paddingInline?: keyof typeof spacing,
  paddingBlock?: keyof typeof spacing,
  gap?: keyof typeof spacing,
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse',
  alignItems?: 'center' | 'start' | 'end'|"flex-start"
  justifyContent?: 'center' | 'start' | 'end',

}
export interface ControlledCardContainerFeeProps extends CardContainerFeeProps {
 AvatarWithName:ReactNode,DoubleText:ReactNode,ElementCardWithDateTags:ReactNode
}