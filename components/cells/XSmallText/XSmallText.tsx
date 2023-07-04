import { forwardRef } from "react";
import { ControlledXSmallTextProps } from "./XSmallText.types";
import { Text } from "@omegup-school/ui-molecules/Text";

export const XSmallText = forwardRef((
  props: ControlledXSmallTextProps,
  ref: React.Ref<HTMLSpanElement>
) => {

  const { text, onClick } = props

  return (
    <Text size="XSmall" ref={ref} weight={400} value={text} {...{ onClick }} />
  )
})