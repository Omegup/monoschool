import { ReactNode } from "react";
import * as avatars from '@omegup-school/ui-assets/images';

export interface StoryProps {
 
  leftNavigator:{
    text: string;
    lightmode:string
   darkmode: string
  };
  items?: {
    text: string;
    avatarUrl: string
  }[];
  rightNavigator:{
    text: string;
    lightmode:string
    darkmode: string
  }
}
export interface ControlledStoryProps extends StoryProps {
  onclick: (value: boolean) => void;
}