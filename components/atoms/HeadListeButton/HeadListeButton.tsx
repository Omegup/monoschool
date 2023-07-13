import {  forwardRef } from "react";
import { ControlledHeadListeButtonProps } from "./HeadListeButton.types";
import { useHeadListeButtonStyles } from "./HeadListeButton.styles";

export const HeadListeButton = forwardRef((
  props: ControlledHeadListeButtonProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { children} = props
  const classes = useHeadListeButtonStyles()
  return (
    <div className={classes.container} ref={ref}>
      {children}
    </div>
  )
})