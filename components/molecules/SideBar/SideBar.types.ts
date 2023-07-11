import { ReactNode } from "react"

export interface SideBarProps {
  children:ReactNode,
  isCollopsed:boolean,
  buttonSideBar:JSX.Element
  firstIcon:JSX.Element;
  logo:JSX.Element;
  SearchIcon:JSX.Element;
  secandIcon:JSX.Element;
  titre:string;
}

