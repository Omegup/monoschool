import { AvatarImage, Avatar, Container, Text, StoryElementNavigatorContainer, } from "@omegup-school/ui-atoms";
import { forwardRef } from "react";
import { ControlledStoryElementCreateProps, StoryElementCreateProps } from "./StoryElementCreate.types";
import * as avatars from '@omegup-school/ui-assets/images';
import { Icon } from '@omegup-school/ui-assets/icons/Icon';
import * as icons from '@omegup-school/ui-assets/icons';



export const StoryElementCreate = forwardRef((
  props: ControlledStoryElementCreateProps,
  ref: React.Ref<HTMLDivElement>
) => {
  const { text, lightMode, darkMode,onclick ,size} = props
  return (
    <StoryElementNavigatorContainer
      onClick={onclick}
      ref={ref}
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="s6"
      iconlight={
        <Icon name={lightMode} width={size??"70px"} height={size??"70px"}/>
      }
      icondark={
        <Icon name={darkMode}  width={size??"70px"} height={size??"70px"}/>
      }
      text={<Text text={text} ref={ref} variant="paragraph_xSmall_semiBold" />}
    />

  )
})