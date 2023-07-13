import {  forwardRef } from "react";
import { ControlledHeadListeButtonProps } from "./HeadListeButton.types";
import {  NakedButton } from "@omegup-school/ui-atoms";
import { FeeCardShadow } from '@omegup-school/ui-configs/effects/shadow';

export const HeadListeButton = forwardRef((
  props: ControlledHeadListeButtonProps,
  ref: React.Ref<HTMLDivElement>
) => {
 const {label}=props
  return (
    <NakedButton
  text={label}
  bg="blue_500"
  textVariant="paragraph_xSmall_regular"
  borderRadius="r6"
  paddingBlock="s5"
  paddingInline="s5"
  lineHeight="small"
  color="light_100"
  shadow={FeeCardShadow}
/>
  )
})