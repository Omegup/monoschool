import * as React from "react"
import { PopoverContextType } from "../Popover/Popover.types"

const defaultRect = {
  left: 0,
  top: 0,
  width: 0,
  height: 0,
}

export const PopoverContext = React.createContext<PopoverContextType>({
  isShow: false,
  backdrop: false,
  setIsShow: () => {
    throw new Error("PopoverContext setIsShow should be used under provider")
  },
  preferredPosition: "bottom-center",
  triggerRect: defaultRect,
  setTriggerRect: () => {
    throw new Error("PopoverContext setTriggerRect should be used under provider")
  },
})


