import { ReactNode } from "react";
import * as avatars from '@omegup-school/ui-assets/images';

export interface StoryElementNavigatorProps {
  text: string;
  avatarUrl: string
}
export interface ControlledStoryElementNavigatorProps extends StoryElementNavigatorProps {
  onclick: (value: boolean) => void;
}