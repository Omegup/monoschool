import { forwardRef } from "react";
import { ControlledDoubleTextProps } from "./DoubleText.types";
import { Text } from "../Text";
import { Container } from "../Container";

export const DoubleText = forwardRef((
  props: ControlledDoubleTextProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, subText } = props

  return (
    <Container
      ref={ref}
      direction="column"
      paddingInline={10}
      justifyContent="start"
      gap={10}
      children={[
        <Text size="XSmall" weight={400} value={text} />,
        <Text size="small" weight={500} value={subText} />
      ]}
    />
  )
})