import { ReactNode } from "react";
export interface  CardElementStorytProps {
  text?: string;
  avatarUrl?:string
 }
 export interface  ControlledCardElementStorytProps extends CardElementStorytProps {
  onclick: (value: boolean) => void;
 }