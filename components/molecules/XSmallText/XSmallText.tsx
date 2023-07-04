import { forwardRef } from "react";
import { ControlledXSmallTextProps } from "./XSmallText.types";
import { Text } from "../Text";

export const XSmallText = forwardRef((
  props: ControlledXSmallTextProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, onClick } = props

  return (
    <Text size="XSmall" weight={400} value={text} {...{ onClick }} />
  )
})