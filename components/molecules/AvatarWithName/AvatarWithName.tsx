import { forwardRef } from "react";
import { AvatarWithNameProps } from "./AvatarWithName.types";
import { Container, Text } from "@omegup-school/ui-atoms";

export const AvatarWithName = forwardRef((
  props: AvatarWithNameProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, avatar } = props

  return (
    <Container
      ref={ref}
      gap={'s5'}
      alignItems="center"
    >
      {avatar}
      <Text text={text} ref={ref} variant="paragraph_small_medium" />
    </Container>
  )
})