import { spacing ,widths} from "@omegup-school/ui-configs/sizes";
import { ReactNode } from "react";

export interface StoryElementContainerProps {
  paddingInline?: keyof typeof spacing,
  paddingBlock?: keyof typeof spacing,
  gap?: keyof typeof spacing,
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse',
  alignItems?: 'center' | 'start' | 'end' | 'space-between' | 'flex-start'
  justifyContent?: 'center' | 'start' | 'end' | 'space-between',
  display?: 'flex' | 'inline-flex'
  width?: string
  avatar?: ReactNode;
  text?: string;
  size?: keyof typeof widths.avatar;


 
}
export interface ControlledStoryElementContainerProps extends StoryElementContainerProps {
  onClick: () => void; 
  onMouseDown?: (direction: 'prev' | 'next') => {};
}
