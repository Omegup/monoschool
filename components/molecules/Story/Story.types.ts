import { ReactNode } from "react";
import * as avatars from '@omegup-school/ui-assets/images';
import * as icons from '@omegup-school/ui-assets/icons';


export interface StoryProps {

  leftNavigator: {
    text: string;
    lightMode: keyof typeof icons;
    darkMode: keyof typeof icons;
  };
  createElement: {
    text: string;
    lightMode: keyof typeof icons;
    darkMode: keyof typeof icons;
  };
  items?: {
    text: string;
    avatarUrl: keyof typeof avatars;
  }[];
  rightNavigator: {
    text: string;
    lightMode: keyof typeof icons;
    darkMode: keyof typeof icons;
  }
}
export interface ControlledStoryProps extends StoryProps {
  onclick: () => void;
  nextClick: () => void;
}
