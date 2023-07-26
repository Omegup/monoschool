import { forwardRef } from "react";
import { useTimelineProgressBarStyles } from "./Timeline.styles";
import { ControlledTimelineProgressBarProps } from "./TimelineProgressBar.types";
import { useContainerStateSelector } from "../contexts/pointer";

export const TimeLineProgressBar = forwardRef(({ progressWidth, isShowingChildrenOnHover, children }: ControlledTimelineProgressBarProps, ref: React.Ref<HTMLDivElement>) => {
  const containerStateSelector = useContainerStateSelector();
  const { root, progressBar } = useTimelineProgressBarStyles({ theme: { progressWidth, containerStateSelector, isShowingChildrenOnHover } });
    return (
    <div className={root} {...{ ref }} >
      {children}
      <div className={progressBar} />
    </div>
  )
})
