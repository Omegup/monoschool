import { ReactNode } from "react";
export interface ControlledCardFeeStudentProps {
  textName?: string;
  avatar?: ReactNode;
  subscription?:string;
  amount?:string;
  date?:string;
  status?:string;
  statusText?:string
}
