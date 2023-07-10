import { useStyles } from './Popover.styles'
import { PopoverProps } from './Popover.types'

export const Footer = ({ size }: PopoverProps) => {
  const classes = useStyles()

  return (
    <footer className={`${classes.container} ${classes[size]}`}>
      Footer
    </footer>
  )
}
