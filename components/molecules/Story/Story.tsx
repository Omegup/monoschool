import { AvatarImage, Avatar, Container, Text, StoryContainer } from "@omegup-school/ui-atoms";
import { forwardRef } from "react";
import { ControlledStoryProps, StoryProps } from "./Story.types";
import * as avatars from '@omegup-school/ui-assets/images';
import { Icon } from '@omegup-school/ui-assets/icons/Icon';
import * as icons from '@omegup-school/ui-assets/icons';
import { StoryElementNavigator } from "../StoryElementNavigator";
import { StoryElement } from "../StoryElement";



export const Story = forwardRef((
  props: ControlledStoryProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { leftNavigator, rightNavigator, children } = props

  return (

    <StoryContainer
      direction="row"
      leftNavigator={<StoryElementNavigator
        darkMode={leftNavigator.darkmode}
        lightMode={leftNavigator.lightmode}
        text={leftNavigator.text}
        onclick={() => { }}
        ref={ref} />}
      children={
        children?.map(e =>
          <StoryElement
            avatarUrl={e.avatarUrl}
            text={e.text}
            onclick={() => { }}
            ref={ref} />
        )
      }
      rightNavigator={<StoryElementNavigator
        darkMode={rightNavigator.darkmode}
        lightMode={rightNavigator.lightmode}
        text={rightNavigator.text}
        onclick={() => { }}
        ref={ref} />}
    />


  )
})