import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { PopoverContext } from '../contexts/PopoverContext'
import { ContentProps } from './Content.types'
import { Position, Rect } from '../Popover/Popover.types'
import { mergeRef, useClickOutside } from '../hooks'
import { Dialog, DialogProps } from '@omegup-school/ui-atoms'

export const Content = ({ children }: ContentProps) => {
  const { isShow } = useContext(PopoverContext)

  if (!isShow) {
    return null
  }

  return <ContentInternal>{children}</ContentInternal>
}

const ContentInternal = ({ children }: { children: React.ReactNode }) => {
  const { triggerRect, preferredPosition, setIsShow, backdrop } = useContext(PopoverContext)
  const ref = useRef<HTMLDialogElement>(null)
  const [coords, setCoords] = useState<DialogProps['coords']>({
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
    <Dialog coords={coords} backdrop={backdrop} ref={mergedRef}>
      {children}
    </Dialog>
  </>)
}

function getPopoverCoords(
  triggerRect: Rect,
  popoverRect: Rect,
  position: Position,
) {
  const triggerRectTop = 0 // triggerRect.top
  const triggerRectLeft = 0 // triggerRect.left
  switch (position) {
    case 'center':
      default:
      return {
        top: `calc(50% - ${popoverRect.height / 2}px)`,
        left: `calc(50% - ${popoverRect.width / 2}px)`
      }
    case 'right-center':
      return {
        top: triggerRectTop + triggerRect.height / 2 - popoverRect.height / 2,
        left: triggerRectLeft + triggerRect.width + 10,
      }
    case 'right-top':
      return {
        top: triggerRectTop,
        left: triggerRectLeft + triggerRect.width + 10,
      }
    case 'left-center':
      return {
        top: triggerRectTop + triggerRect.height / 2 - popoverRect.height / 2,
        left: triggerRectLeft - popoverRect.width - 10,
      }
    case 'left-top':
      return {
        top: triggerRectTop,
        left: triggerRectLeft - popoverRect.width - 10,
      }
    case 'top-center':
      return {
        top: triggerRectTop - popoverRect.height - 5,
        left: triggerRectLeft + triggerRect.width / 2 - popoverRect.width / 2,
      }
    case 'bottom-center':
      return {
        top: triggerRectTop + triggerRect.height + 5,
        left: triggerRectLeft + triggerRect.width / 2 - popoverRect.width / 2,
      }
  }
}