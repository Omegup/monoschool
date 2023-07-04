import { forwardRef } from "react";
import { ControlledSmallTextProps } from "./SmallText.types";
import { Text } from "../Text";

export const SmallText = forwardRef((
  props: ControlledSmallTextProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, onClick } = props

  return (
    <Text size="small" weight={500} value={text}{...{ onClick }} />
  )
})