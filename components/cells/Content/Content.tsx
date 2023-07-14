import {
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { Dialog } from '@omegup-school/ui-molecules/Popover'
import { PopoverContext } from "../contexts/PopoverContext"
import { ContentProps } from "./Content.types"
import { Position, Rect } from "../Popover/Popover.types"
import { mergeRef, useClickOutside } from "../hooks"

export const Content = ({ children }: ContentProps) => {
  const { isShow } = useContext(PopoverContext)

  if (!isShow) {
    return null
  }

  return <ContentInternal>{children}</ContentInternal>
}

const ContentInternal = ({ children }: { children: React.ReactNode }) => {
  const { triggerRect, preferredPosition, setIsShow, backdrop} = useContext(PopoverContext)
  const ref = useRef<HTMLDialogElement>(null)
  const [coords, setCoords] = useState({
    left: 0,
    top: 0,
  })

  useLayoutEffect(() => {
    const element = ref.current
    if (element == null) {
      return
    }

    const rect = element.getBoundingClientRect()

    const coords = getPopoverCoords(triggerRect, rect, preferredPosition)
    setCoords(coords)
  }, [])

  const dismiss = useCallback(() => {
    setIsShow(false)
  }, [])
  const refClickOutside = useClickOutside(dismiss)

  const mergedRef = mergeRef(ref, refClickOutside)

  return (<>
    <Dialog coords={coords} backdrop={backdrop} ref={mergedRef} >
      {children}
    </Dialog>
  </>)
}

function getPopoverCoords(
  triggerRect: Rect,
  popoverRect: Rect,
  position: Position
) {
  switch (position) {
    case "right-center":
      return {
        top: triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2,
        left: triggerRect.left + triggerRect.width + 10,
      }
    case "left-center":
      return {
        top: triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2,
        left: triggerRect.left - popoverRect.width -10,
      }
    case "top-center":
      return {
        top: triggerRect.top-popoverRect.height - 5,
        left: triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2,
      }
    case "bottom-center":
    default:
      let top = triggerRect.top + triggerRect.height + 5
      let left = Math.max(
        triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2,
        10
      )

      if (top + popoverRect.height > window.innerHeight - 10) {
        top = triggerRect.top - 10 - popoverRect.height
      }
      return {
        top,
        left,
      }
  }
}