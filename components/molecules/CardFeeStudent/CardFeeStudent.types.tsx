import { ReactNode } from "react";
export interface ControlledCardFeeStudentProps {
  textName?: string;
  avatar?: string;
  subscription?:string;
  amount?:string;
  date?:string;
  status?:TagType;
  statusText?:string
}
type TagType = 'success' | 'warning' | 'error' | 'active' | 'info' | 'inactive'