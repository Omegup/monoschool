import { ReactNode } from "react";
import * as avatars from '@omegup-school/ui-assets/images';

export interface  CardElementStorytProps {
  text?: string;
 avatarUrl: string
 }
 export interface  ControlledCardElementStorytProps extends CardElementStorytProps {
  onclick: (value: boolean) => void;
 }