import { forwardRef } from "react";
import { ControlledSmallTextProps } from "./SmallText.types";
import { Text } from "@omegup-school/ui-atoms";

export const SmallText = forwardRef((
  props: ControlledSmallTextProps,
  ref: React.Ref<HTMLSpanElement>
) => {

  const { text } = props

  return (
    <Text size="small" ref={ref} weight={500} value={text} />
  )
})