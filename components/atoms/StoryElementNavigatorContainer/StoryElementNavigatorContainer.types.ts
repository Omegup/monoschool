import { spacing ,widths} from "@omegup-school/ui-configs/sizes";
import { ReactNode } from "react";

export interface StoryElementNavigatorContainerProps {
  paddingInline?: keyof typeof spacing,
  paddingBlock?: keyof typeof spacing,
  gap?: keyof typeof spacing,
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse',
  alignItems?: 'center' | 'start' | 'end' | 'space-between' | 'flex-start'
  justifyContent?: 'center' | 'start' | 'end' | 'space-between',
  display?: 'flex' | 'inline-flex'
  width?: string
  iconlight?: ReactNode;
  icondark?: ReactNode;
  text?: ReactNode;
  size?: keyof typeof widths.avatar;
 }
export interface ControlledStoryElementNavigatorContainerProps extends StoryElementNavigatorContainerProps {
  onClick: () => void;
}
