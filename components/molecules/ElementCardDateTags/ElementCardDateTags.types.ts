import { ReactNode } from "react";

export interface ElementCardTaxTagsProps {
  date: string,
  label?: string;
  type?: TagType;
}


type TagType = 'success' | 'warning' | 'error' | 'active' | 'info' | 'inactive'