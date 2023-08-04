import { ReactNode } from "react";
import * as avatars from '@omegup-school/ui-assets/images';
import * as icons from '@omegup-school/ui-assets/icons';

export interface StoryElementCreateProps {
  text: string;
  lightMode: keyof typeof icons ;
  darkMode:  keyof typeof icons ;
  size?:string
}
export interface ControlledStoryElementCreateProps extends StoryElementCreateProps {
  onclick: () => void;
}