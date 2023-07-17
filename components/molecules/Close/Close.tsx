import React ,{ useContext } from "react"
import { PopoverContext } from "../contexts/PopoverContext"
import { CloseProps } from "./Close.types"

export function Close({ children }: CloseProps) {
  const { setIsShow } = useContext(PopoverContext)
  const onClick = (e: MouseEvent) => {
    setIsShow(false)

    e.stopPropagation()
  }
  const childrenToClosePopover = React.cloneElement(children, {
    onClick, 
  })

  return childrenToClosePopover
}
