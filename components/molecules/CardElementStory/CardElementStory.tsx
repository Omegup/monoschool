import { Container, Text } from "@omegup-school/ui-atoms";
import { forwardRef } from "react";
import { ControlledCardElementStorytProps } from "./CardElementStory.types";


export const CardElementStory = forwardRef((
  props: ControlledCardElementStorytProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, avatar } = props

  return (
    <Container
      gap="s5"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {avatar}
      
        <Text text={text ?? "Success"} ref={ref} variant="paragraph_medium_medium" />
  
    </Container>
  )
})