import { Container, Text } from "@omegup-school/ui-atoms";
import { forwardRef } from "react";
import { CardPrimaryTextProps } from "./CardPrimaryText.types";
 

export const CardPrimaryText = forwardRef((
  props:CardPrimaryTextProps ,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text} = props

  return (
    <Container
      alignItems="flex-start"
      paddingInline="s5"
      display="inline-flex"
      >

      <Text text={text ?? "Success"} ref={ref} variant="paragraph_small_regular" />
    </Container>
  )
})