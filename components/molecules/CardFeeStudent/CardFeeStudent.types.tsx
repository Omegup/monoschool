import { ReactNode } from "react";
export interface ControlledCardFeeStudentProps {
  textName?: string;
  avatar?: ReactNode;
  subscription?:string;
  amount?:string;
  date?:string;
  status?:TagType;
  statusText?:string
}
 

type TagType = 'success' | 'warning' | 'error' | 'active' | 'info' | 'inactive'