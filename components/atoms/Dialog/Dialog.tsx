import { forwardRef } from 'react'
import { useStyles } from './Dialog.styles'
import { ControlledDialogProps } from './Dialog.types'

export const Dialog = forwardRef((props: ControlledDialogProps, ref: React.Ref<HTMLDivElement>) => {
  const classes = useStyles(props)

  return (
    <div 
      className={classes.dialog}
      ref={ref}
    >
      {props.children}
    </div>
  )
})
