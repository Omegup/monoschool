import { forwardRef } from "react";
import { ControlledDoubleTextProps } from "./DoubleText.types";
import { Container, Text } from "@omegup-school/ui-atoms";

export const DoubleText = forwardRef((
  props: ControlledDoubleTextProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, subText } = props

  return (
    <Container
      ref={ref}
      direction="column"
    >
      <Text text={text} variant="paragraph_xSmall_regular" />
      <Text text={text} variant="paragraph_small_medium" />
    </Container>
  )
})