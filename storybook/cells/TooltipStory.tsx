
import { Jumper, Tooltip } from '@omegup-school/ui-atoms'
import { TooltipProps } from '@omegup-school/ui-atoms/Tooltip/Tooltip.types'
import { Popover } from '@omegup-school/ui-cells'
import { Position } from '@omegup-school/ui-cells/Popover/Popover.types'

export const TooltipStory = ({ size, variant, position, label }: TooltipProps) => {

  const preferredPosition: { [k in TooltipProps['position']]: Position } = {
    right: 'right-center',
    bottom: 'bottom-center',
    top: 'top-center',
    left: 'left-center'
  }

  return (<>
    <Popover preferredPosition={preferredPosition[position]}>
      <Popover.Trigger showOn='mouseEnter' closeOn='mouseLeave' >
        <button>Students</button>

      </Popover.Trigger>
      <Popover.Content>
        <Tooltip {...{ size, variant, position, label }} />
      </Popover.Content>
    </Popover>
  </>)
}