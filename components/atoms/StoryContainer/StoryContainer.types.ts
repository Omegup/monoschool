import { spacing } from "@omegup-school/ui-configs/sizes";
import { ReactNode } from "react";
import { StoryElementContainerProps } from "../StoryElementContainer";
import { StoryElementNavigatorContainerProps } from "../StoryElementNavigatorContainer/StoryElementNavigatorContainer.types";

export interface StoryContainerProps {

    paddingInline?: keyof typeof spacing,
    paddingBlock?: keyof typeof spacing,
    gap?: keyof typeof spacing,
    direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse',
    alignItems?: 'center' | 'start' | 'end' | 'space-between' | 'flex-start'
    justifyContent?: 'center' | 'start' | 'end' | 'space-between',
    display?: 'flex' | 'inline-flex'
    width?: "-webkit-fill-available"
}
export interface ControlledStoryContainerProps extends StoryContainerProps {
  leftNavigator:ReactNode
  children?: ReactNode[];
  rightNavigator:ReactNode
}
