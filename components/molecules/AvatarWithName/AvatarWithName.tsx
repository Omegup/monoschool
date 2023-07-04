import { forwardRef } from "react";
import { ControlledAvatarWithNameProps } from "./AvatarWithName.types";
import { Text } from "../Text";
import { Container } from "../Container";

export const AvatarWithName = forwardRef((
  props: ControlledAvatarWithNameProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, avatar } = props

  return (
    <Container
      ref={ref}
      direction="row"
      paddingInline={10}
      justifyContent="start"
      gap={10}
      children={[
        avatar,
        < Text size="small" weight={500} value={text} />
      ]}
    />
  )
})