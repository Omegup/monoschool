import { useStyles } from './Footer.styles'
import { FooterProps } from './Footer.types'

export const Footer = ({ size }: FooterProps) => {
  const classes = useStyles()

  return (
    <footer className={`${classes.container} ${classes[size]}`}>
      Footer
    </footer>
  )
}
