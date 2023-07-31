import { forwardRef } from "react";
import { useTimelineProgressBarStyles } from "./TimelineProgressBar.styles";
import { ControlledTimelineProgressBarProps } from "./TimelineProgressBar.types";

export const TimeLineProgressBar = forwardRef(({ progressWidth, showProgressBarElements, children }: ControlledTimelineProgressBarProps, ref: React.Ref<HTMLDivElement>) => {
  const { root, progressBar } = useTimelineProgressBarStyles({ theme: { progressWidth } });
  return (
    <div className={root} {...{ ref }} >
      {showProgressBarElements && children}
      <div className={progressBar} />
    </div>
  )
})
