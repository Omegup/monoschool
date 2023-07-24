import { forwardRef } from "react";
import { useTimelineProgressBarStyles } from "./Timeline.styles";
import { ControlledTimelineProgressBarProps } from "./TimelineProgressBar.types";
import { useContainerStateSelector } from "../contexts/pointer";

export const TimeLineProgressBar = forwardRef(({ progress, totalProgressUnits, isShowingChildrenOnHover, children }: ControlledTimelineProgressBarProps, ref: React.Ref<HTMLDivElement>) => {
  const containerStateSelector = useContainerStateSelector();
  const { root, progressBar } = useTimelineProgressBarStyles({ theme: { progress, totalProgressUnits, containerStateSelector, isShowingChildrenOnHover } });
  return (
    <div className={root} {...{ ref }} >
      {children}
      <div className={progressBar} />
    </div>
  )
})
