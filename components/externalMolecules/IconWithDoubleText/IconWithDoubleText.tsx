import { forwardRef } from "react";
import { IconWithDoubleTextProps } from "./IconWithDoubleText.types";
import { Container, Text } from "@omegup-school/ui-atoms";

export const IconWithDoubleText = forwardRef((
  props: IconWithDoubleTextProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, subText, icon } = props

  return (<Container
    ref={ref}
    direction="row"
    paddingInline={'s5'}
    alignItems="center"
    gap={"s2"}
  >
    <Container
      ref={ref}
      paddingBlock={'s5'}
      paddingInline={'s5'}
    >
      {[icon]}
    </Container>
    <Container
      ref={ref}
      direction="column">
      <Text text={text} variant="paragraph_xSmall_regular" />
      <Text text={subText} variant="paragraph_small_medium" />
    </Container>
  </Container>
  )
})