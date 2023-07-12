import { forwardRef } from "react";
import { TagContainerProps } from "./TagContainer.types";
import { Container, TagToggle, Text } from "@omegup-school/ui-atoms";



export const TagContainer = forwardRef((
  props: TagContainerProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { type, label } = props

  return (
    <Container
      alignItems="flex-start"
      paddingInline="s5"
      display="inline-flex"
      width="-webkit-fill-available">

<TagToggle type={type} label={label}/>
  </Container>
  )
})