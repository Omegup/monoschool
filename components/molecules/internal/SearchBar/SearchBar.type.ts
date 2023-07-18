import { ChangeEvent } from "react";


export interface SearchBarProps {
  variant:'navBar' | 'sideBar' | 'filterSearch';
  startIcon:JSX.Element;
  clearIcon:JSX.Element;
  placeholder: string;
  change:(event:ChangeEvent<HTMLInputElement>)=>void;
  text:string;
  disabled:boolean;
}
