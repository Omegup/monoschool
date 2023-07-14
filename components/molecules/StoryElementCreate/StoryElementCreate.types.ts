import { ReactNode } from "react";
import * as avatars from '@omegup-school/ui-assets/images';

export interface StoryElementCreateProps {
  text: string;
  lightMode:string
  darkMode: string
}
export interface ControlledStoryElementCreateProps extends StoryElementCreateProps {
  onclick: (value: boolean) => void;
}