import * as React from "react"
import {
  useContext,
  useRef,
} from "react"
import { PopoverContext } from "../contexts/PopoverContext"
import { TriggerOn, TriggerProps } from "./Trigger.types"
import { Jumper } from "@omegup-school/ui-atoms"

export const Trigger = ({ jump, showOn, closeOn, children }: TriggerProps) => {
  const { setIsShow, setTriggerRect, isShow, triggerRect } = useContext(PopoverContext)
  const ref = useRef<HTMLElement>(null)
  const show = (e: MouseEvent) => {
    const element = ref.current
    if (element == null) {
      return
    }
    const rect = element.getBoundingClientRect()
    setTriggerRect(rect)
    setIsShow(true)
  }
  const dismiss = (e: MouseEvent) => {
    setIsShow(false)

    e.stopPropagation()
  }

  const childrenToTriggerPopover = React.cloneElement(children, {
    [TriggerOn[showOn]]: show,
    ...closeOn ? { [TriggerOn[closeOn]]: dismiss } : {},
    ref,
  })

  return jump ? <Jumper>{childrenToTriggerPopover}</Jumper> : childrenToTriggerPopover
}