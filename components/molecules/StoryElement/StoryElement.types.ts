import { ReactNode } from "react";
import * as avatars from '@omegup-school/ui-assets/images';

export interface  StoryElementProps {
  text: string;
 avatarUrl: string
 }
 export interface  ControlledStoryElementProps extends StoryElementProps {
  onclick: (value: boolean) => void;
 }