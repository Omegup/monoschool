
import { Popover } from '@omegup-school/ui-cells'

export const MenuStory = () => {

  return (<>
    <Popover preferredPosition="bottom-center" backdrop>
      <Popover.Trigger showOn='click' jump>
        <input placeholder="Search" />
      </Popover.Trigger>
      <Popover.Content>
        <ul>
          <li>
            <Popover preferredPosition="right-center"  backdrop>
              <Popover.Trigger showOn='click'>
                <button>Students</button>
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