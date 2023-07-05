import { forwardRef } from "react";
import { ControlledTextWithIconProps } from "./TextWithIcon.types";
import { Container, Text } from "@omegup-school/ui-atoms";

export const TextWithIcon = forwardRef((
  props: ControlledTextWithIconProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { icon, text } = props

  return (
    <Container
      ref={ref}
      gap={'s2'}
      alignItems="center"
    >
      {icon}
      <Text text={text} ref={ref} variant="paragraph_small_medium" />
    </Container>
  )
})