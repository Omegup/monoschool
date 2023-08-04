import { AvatarImage, Avatar, Container, Text, StoryElementNavigatorContainer,  } from "@omegup-school/ui-atoms";
import { forwardRef } from "react";
import {ControlledStoryElementNavigatorProps,StoryElementNavigatorProps } from "./StoryElementNavigator.types";
import * as avatars from '@omegup-school/ui-assets/images';
import { Icon } from '@omegup-school/ui-assets/icons/Icon';
import * as icons from '@omegup-school/ui-assets/icons';



export const StoryElementNavigator = forwardRef((
  props: ControlledStoryElementNavigatorProps,
  ref: React.Ref<HTMLDivElement>
) => {
  const { text, lightMode,darkMode ,onclick} = props
  return (
    <StoryElementNavigatorContainer
      size={"xlarge"}
      onClick={onclick}
      ref={ref}
      gap="s6"
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="70px"
      iconlight={
        <Icon name={lightMode} width="70px" height="70px"/>
      }
      icondark={
        <Icon name={darkMode} width="70px" height="70px"/>
      }
      text={text}
    />

  )
})