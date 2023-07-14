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
      <div className={classes.leftNavigator}>
        {leftNavigator}</div>
      <div className={classes.childrenList}> {children}</div>
      <div className={classes.rightNavigator}>
        {rightNavigator}
      </div>
    </div>
  )
})