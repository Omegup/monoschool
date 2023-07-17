import { ReactNode } from "react";
import * as avatars from '@omegup-school/ui-assets/images';

export interface StoryElementNavigatorProps {
  text: string;
  lightMode:string
  darkMode: string
}
export interface ControlledStoryElementNavigatorProps extends StoryElementNavigatorProps {
  onclick: () => void;
}