import { Layout, Popover } from "@omegup-school/ui-molecules"

export const LayoutStory = ({ backdrop }: {backdrop: boolean}) => <Layout navBar={<NavBarStory backdrop={backdrop} /> } sideBar={<>SideBar</>}> </Layout>

const NavBarStory = ({ backdrop }: {backdrop: boolean}) => {

  return (
    <>
      <Popover preferredPosition="bottom-center" backdrop={backdrop}>
        <Popover.Trigger showOn='click' jump>
          <input placeholder="Search" />
        </Popover.Trigger>
        <Popover.Content>
          <ul>
            <li>
              <Popover preferredPosition="right-center">
                <Popover.Trigger showOn='click'>
                  <nav>Students</nav>
                </Popover.Trigger>
                <Popover.Content>
                  <ul style={{background: '#fff'}}>
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
