import { Container, Text } from "@omegup-school/ui-atoms";
import { forwardRef } from "react";
import {ControlledCardElementStorytProps} from "./CardElementStory.types";
 

export const CardPrimaryText = forwardRef((
  props:ControlledCardElementStorytProps ,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text,avatar} = props

  return (
    <Container
  gap="s5"
  flex
      >
      <Text text={text ?? "Success"} ref={ref} variant="paragraph_small_regular" />
    </Container>
  )
})