import { AvatarImage, Avatar, Container, Text, StoryElementContainer } from "@omegup-school/ui-atoms";
import { forwardRef } from "react";
import { ControlledStoryElementProps, StoryElementProps } from "./StoryElement.types";
import * as avatars from '@omegup-school/ui-assets/images';
import { Icon } from '@omegup-school/ui-assets/icons/Icon';
import * as icons from '@omegup-school/ui-assets/icons';

 

export const StoryElement = forwardRef((
  props: ControlledStoryElementProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, avatarUrl } = props

  return (
    <StoryElementContainer
      size={"xlarge"}
      onClick={() => { }}
      ref={ref}
      gap="s5"
      direction="column"
      justifyContent="center"
      alignItems="center"
      avatar={<Avatar
          children={<AvatarImage src={avatars[avatarUrl]} />}
          size="xlarge"
          onClick={() => { }}
          ref={ref}
        /> }
      text={text}
    />

  )
})