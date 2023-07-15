import { forwardRef } from "react";
import { CardSecondaryTextProps } from "./CardSecondaryText.types";
import { Container, Text } from "@omegup-school/ui-atoms";

export const CardSecondaryText = forwardRef((
  props: CardSecondaryTextProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text} = props

  return (
    <Container
      alignItems="flex-start"
      paddingInline="s5"
      display="inline-flex"
      width="-webkit-fill-available">
<Text text={text??"Success"} ref={ref} variant="paragraph_xSmall_regular" />
  </Container>
  )
})