import {
  useContext,
  useState,
} from "react"
import { PopoverProps } from "./Popover.types"
import { Content } from "../Content"
import { Trigger } from "../Trigger"
import { Close } from "../Close"
import { PopoverContext } from "../contexts/PopoverContext"
import { Backdrop } from "@omegup-school/ui-molecules/Popover"

const defaultRect = {
  left: 0,
  top: 0,
  width: 0,
  height: 0,
}

export const Popover = ({
  children,
  preferredPosition = "bottom-center",
  backdrop = false
}: PopoverProps) => {
  const [isShow, setIsShow] = useState(false)
  const [triggerRect, setTriggerRect] = useState(defaultRect)
  const {backdrop: parentBackdrop} = useContext(PopoverContext)
  const contextValue = {
    isShow,
    setIsShow,
    preferredPosition,
    triggerRect,
    setTriggerRect,
    backdrop
  }

  return (
    <PopoverContext.Provider value={contextValue}>
      {backdrop && !parentBackdrop && isShow && <Backdrop />}
      {children}
    </PopoverContext.Provider>
  )
}

Popover.Trigger = Trigger
Popover.Content = Content
Popover.Close = Close






