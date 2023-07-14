import { Popover } from "@omegup-school/ui-cells"
import { Layout } from "@omegup-school/ui-molecules"

export const LayoutStory = () => <Layout navBar={<NavBarStory /> } sideBar={<>SideBar</>}> </Layout>

const NavBarStory = () => {

  return (
    <>
      <Popover preferredPosition="bottom-center" backdrop>
        <Popover.Trigger showOn='click' jump>
          <input placeholder="Search" />
        </Popover.Trigger>
        <Popover.Content>
          <ul>
            <li>
              <Popover preferredPosition="right-center" backdrop>
                <Popover.Trigger showOn='click'>
                  <nav>Students</nav>
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
    </>
  )
}
