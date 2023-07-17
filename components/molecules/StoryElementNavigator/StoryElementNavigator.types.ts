import { ReactNode } from "react";
import * as avatars from '@omegup-school/ui-assets/images';
import * as icons from '@omegup-school/ui-assets/icons';

export interface StoryElementNavigatorProps {
  text: string;
  lightMode: keyof typeof icons ;
  darkMode:  keyof typeof icons ;
}
export interface ControlledStoryElementNavigatorProps extends StoryElementNavigatorProps {
  onclick: () => void;
}