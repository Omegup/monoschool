
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
    <Popover preferredPosition="bottom-center" backdrop>
      <Popover.Trigger showOn='click' jump>
        <input placeholder="Search" />
      </Popover.Trigger>
      <Popover.Content>
        <ul>
          <li>
            <Popover preferredPosition="right-center"  backdrop>
              <Popover.Trigger showOn='click'>
                <a href="#">Students</a>
              </Popover.Trigger>
              <Popover.Content>
                <ul>
                  <li>Sub 11111111111111111</li>
                  <li>Sub 222222222222222222</li>
                </ul>
              </Popover.Content>
            </Popover>

          </li>
          <li>Student B</li>
          <li>Student C</li>
        </ul>
      </Popover.Content>
    </Popover>
  </>)
}