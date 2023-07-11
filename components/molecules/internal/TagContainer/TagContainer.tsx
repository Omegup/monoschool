import { forwardRef } from "react";
import { TagContainerProps } from "./TagContainer.types";
import { Container, Text } from "@omegup-school/ui-atoms";



export const TagContainer = forwardRef((
  props: TagContainerProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { status, text } = props

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