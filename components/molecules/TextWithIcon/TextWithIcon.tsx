import { forwardRef } from "react";
import { ControlledTextWithIconProps } from "./TextWithIcon.types";
import { Text } from "../Text";
import { IconContainer } from "../IconContainer";
import { Container } from "../Container";

export const TextWithIcon = forwardRef((
  props: ControlledTextWithIconProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, icon, padding } = props

  return (
    <Container
      ref={ref}
      direction="row"
      paddingInline={10}
      justifyContent="start"
      gap={10}
      children={[
        <IconContainer {...{ icon, padding }} />,
        <Text size="XSmall" weight={400} value={text} />
      ]}
    />
  )
})