import { forwardRef } from "react";
import { TextWithIconProps } from "./TextWithIcon.types";
import { Container, Text } from "@omegup-school/ui-atoms";

export const TextWithIcon = forwardRef((
  props: TextWithIconProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { icon, text } = props

  return (
    <Container
      ref={ref}
      gap={'s5'}
      alignItems="center"
    >
      {icon}
      <Text text={text} ref={ref} variant="paragraph_small_medium" />
    </Container>
  )
})