import { ReactNode } from "react";
export interface TagContainerProps {
  type?: TagType;
  label? : string;
}

type TagType = 'success' | 'warning' | 'error' | 'active' | 'info' | 'inactive'
