import { ReactNode } from "react";
export interface  CardElementStorytProps {
  text?: string;
  avatar?:ReactNode
 }
 export interface  ControlledCardElementStorytProps extends CardElementStorytProps {
  onclick: (value: boolean) => void;
 }