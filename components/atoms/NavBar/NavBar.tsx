import { useStyles } from './NavBar.styles'
import { NavBarProps } from './Footer.types'

export const NavBar = ({ size }: NavBarProps) => {
  const classes = useStyles()

  return (
<header className={`${classes.container} ${classes[size]}`}>
            <Popover preferredPosition="bottom-center">
        <Popover.Trigger jump>
        <input placeholder="Search" />
          </Popover.Trigger>
          <Popover.Content background>
            <ul>
              <li>
              <Popover preferredPosition="right">
        <Popover.Trigger>
            <a href="#">Studentsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</a>
          </Popover.Trigger>
          <Popover.Content>
            <ul>
              <li>Sub 1</li>
              <li>Sub 2</li>
            </ul>
          </Popover.Content>
        </Popover>

              </li>
              <li>Student B</li>
              <li>Student C</li>
            </ul>
          </Popover.Content>
        </Popover>

    </header>
  )
}
