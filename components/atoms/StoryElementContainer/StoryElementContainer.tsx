import { forwardRef } from "react";
import {  ControlledStoryElementContainerProps } from "./StoryElementContainer.types";
import { useStoryElementContainerStyles } from "./StoryElementContainer.styles";

export const StoryElementContainer = forwardRef((
  props: ControlledStoryElementContainerProps,
  ref: React.Ref<HTMLDivElement>
) => {
  const { avatar, text,onClick, ...styling } = props
  const classes = useStoryElementContainerStyles(styling)
  return (    <div className={classes.container}   ref={ref} {...{ onClick }}  >
      <div className={classes.avatar}>
        {avatar} 
        </div>
      <div className={classes.text}>
        {text}
      </div>

    </div>
  )
})