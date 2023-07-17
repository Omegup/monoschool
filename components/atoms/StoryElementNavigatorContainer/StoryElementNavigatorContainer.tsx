import { forwardRef } from "react";
import { ControlledStoryElementNavigatorContainerProps } from "./StoryElementNavigatorContainer.types";
import { useStoryElementNavigatorContainerStyles } from "./StoryElementNavigatorContainer.styles";
export const StoryElementNavigatorContainer = forwardRef((
  props: ControlledStoryElementNavigatorContainerProps,
  ref: React.Ref<HTMLDivElement>
) => {
  const { icondark, iconlight, text, onClick, ...styling } = props
  const classes = useStoryElementNavigatorContainerStyles(styling)
  return (
    <div className={classes.container} ref={ref} {...{ onClick }}  >
      <div className={classes.iconlight}>
        {iconlight}
      </div>
      <div className={classes.icondark}>
        {icondark}
      </div>
      <div className={classes.text}>
        {text}
      </div>
    </div>
  )
})