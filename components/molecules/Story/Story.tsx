import { AvatarImage, Avatar, Container, Text, StoryContainer } from "@omegup-school/ui-atoms";
import { forwardRef } from "react";
import { ControlledStoryProps, StoryProps } from "./Story.types";
import * as avatars from '@omegup-school/ui-assets/images';
import { Icon } from '@omegup-school/ui-assets/icons/Icon';
import * as icons from '@omegup-school/ui-assets/icons';
import { StoryElementNavigator } from "../StoryElementNavigator";
import { StoryElement } from "../StoryElement";
import { StoryElementCreate } from "../StoryElementCreate";



export const Story = forwardRef((
  props: ControlledStoryProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { leftNavigator, rightNavigator, items } = props

  return (

    <StoryContainer
      direction="row"
      display="inline-flex"
      alignItems="flex-start"
      gap="s6"
      leftNavigator={
        <StoryElementCreate
          darkMode={leftNavigator.darkmode}
          lightMode={leftNavigator.lightmode}
          text={leftNavigator.text}
          onclick={() => { }}
          ref={ref} />
      }
      children={
        items?.map((ch, index) =>
          <StoryElement
            key={index}
            avatarUrl={ch.avatarUrl}
            text={ch.text}
            onclick={() => { }}
            ref={ref} />
        )
      }
      rightNavigator={
        <StoryElementNavigator 
          darkMode={rightNavigator.darkmode}
          lightMode={rightNavigator.lightmode}
          text={rightNavigator.text}
          onclick={() => { }}
          ref={ref} />}
    />


  )
})