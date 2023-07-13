import { ReactNode } from "react"

export interface SideBarProps {
  children:ReactNode,
  isCollopsed:boolean,
  collopsedButton:JSX.Element
  LeftCollopsedIcon:JSX.Element;
  RightCollopsedIcon:JSX.Element;
  logo:JSX.Element;
  SearchIcon:JSX.Element;
  titre:string;
}

