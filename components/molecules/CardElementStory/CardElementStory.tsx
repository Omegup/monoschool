import { AvatarImage, Container, Text } from "@omegup-school/ui-atoms";
import { forwardRef } from "react";
import { ControlledCardElementStorytProps } from "./CardElementStory.types";
import { Avatar } from "@omegup-school/ui-assets";
 


export const CardElementStory = forwardRef((
  props: ControlledCardElementStorytProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, avatarUrl } = props
 
   return (
    <Container
      gap="s5"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
    <AvatarImage
    src={avatarUrl??'none'}
     />
      
        <Text text={text ?? "Success"} ref={ref} variant="paragraph_medium_medium" />
  
    </Container>
  )
})