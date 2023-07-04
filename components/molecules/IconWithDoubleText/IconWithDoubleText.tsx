import { forwardRef } from "react";
import { ControlledIconWithDoubleTextProps } from "./IconWithDoubleText.types";
import { Text } from "../Text";
import { Container } from "../Container";
import { IconContainer } from "../IconContainer";

export const IconWithDoubleText = forwardRef((
  props: ControlledIconWithDoubleTextProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, subText, icon } = props

  return (<Container
    ref={ref}
    justifyContent="start"
    children={[
      <IconContainer
        {...{ icon }}

        padding={10}
      />,
      <Container
        ref={ref}
        direction="column"
        paddingInline={10}
        alignItems="start"
        children={[
          <Text size="XSmall" weight={400} value={text} />,
          <Text size="small" weight={500} value={subText} />
        ]}
      />]}
  />
  )
})