import { forwardRef } from "react";
import { ControlledContainerProps } from "./CardElementStoryContainer.types";
import { useContainerStyles } from "./CardElementStoryContainer.styles";

export const Container = forwardRef((
  props: ControlledContainerProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { avatar, text, ...styling } = props
  const classes = useContainerStyles(styling)

  return (
    <div className={classes.container} ref={ref}>
      <div className={classes.avatar}>
        {avatar} </div>
      <div className={classes.text}>
        {text}
      </div>

    </div>
  )
})