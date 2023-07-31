import { ProgressBarElement, TimelineContainer, TimeLineProgressBar, TimelineTooltip } from "@omegup-school/ui-atoms";
import { ControlledTimelineProps } from "./Timeline.types";

export const Timeline = ({
  progressDateTitle,
  progressDate,
  startDate,
  endDate,
  progressBarElements,
  tooltipDataDisplay,
  progressPercentage,
  showProgressBarElements,
  onTimelineContainerClick,
  onTimelineContainerMouseOver,
  onTimelineContainerMouseLeave,
}: ControlledTimelineProps) =>
  <TimelineContainer  {...{ progressDateTitle, progressDate, startDate, endDate, onClick: onTimelineContainerClick, onMouseOver: onTimelineContainerMouseOver, onMouseLeave: onTimelineContainerMouseLeave }}>
    {tooltipDataDisplay && <TimelineTooltip {...tooltipDataDisplay} />}
    <TimeLineProgressBar  {...{ progressWidth: progressPercentage, showProgressBarElements }} >
      {progressBarElements?.map(({ elementPercentagePosition, elementRender, elementPercentageWidth, onClick }, key) =>
        <ProgressBarElement {...{ key, leftPercentage: elementPercentagePosition, width: elementPercentageWidth, onClick }} >
          {elementRender}
        </ProgressBarElement>)}
    </TimeLineProgressBar>
  </TimelineContainer>













