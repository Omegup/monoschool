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
  isShowingChildrenOnHover,
  onTimelineContainerClick,
}: ControlledTimelineProps) => <TimelineContainer  {...{ progressDateTitle, progressDate, startDate, endDate, onClick: onTimelineContainerClick }}>
    {tooltipDataDisplay && <TimelineTooltip {...tooltipDataDisplay} />}
    <TimeLineProgressBar {...{ progressWidth: progressPercentage, isShowingChildrenOnHover }} >
      {progressBarElements?.map(({ elementPercentagePosition, elementRender, elementPercentageWidth, onClick }, key) =>
        <ProgressBarElement {...{ key, leftPercentage: elementPercentagePosition, width: elementPercentageWidth, onClick }} >
          {elementRender}
        </ProgressBarElement>)}
    </TimeLineProgressBar>
  </TimelineContainer>












