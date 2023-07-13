import { forwardRef } from "react";
import { ControlledCardElementStoryContainerProps } from "./CardElementStoryContainer.types";
import { useCardElementStoryContainerStyles } from "./CardElementStoryContainer.styles";

export const CardElementStoryContainer = forwardRef((
  props: ControlledCardElementStoryContainerProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { avatar, text, ...styling } = props
  const classes = useCardElementStoryContainerStyles(styling)

  return (
    <div className={classes.container} ref={ref}>
      <div className={classes.avatar}>
        {avatar} 
        </div>
      <div className={classes.text}>
        {text}
      </div>

    </div>
  )
})