import { forwardRef } from 'react'
import { useStyles } from './Jumper.styles'
import { ControlledJumperProps } from './Jumper.types'

export const Jumper = forwardRef((props: ControlledJumperProps, ref: React.Ref<HTMLElement>) => {
  const classes = useStyles()

  return (
    <span 
      className={classes.jumper}
      ref={ref}
    >
      {props.children}
    </span>
  )
})
