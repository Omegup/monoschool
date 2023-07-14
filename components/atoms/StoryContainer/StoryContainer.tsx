import { forwardRef } from "react";
import { ControlledStoryContainerProps } from "./StoryContainer.types";
import { useStoryContainerStyles } from "./StoryContainer.styles";

export const StoryContainer = forwardRef((
  props: ControlledStoryContainerProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { leftNavigator, rightNavigator, children, ...styling } = props
  const classes = useStoryContainerStyles(styling)

  return (
    <div className={classes.StoryContainer} ref={ref}>
      {leftNavigator}
      {children} 
      {rightNavigator}
    </div>
  )
})