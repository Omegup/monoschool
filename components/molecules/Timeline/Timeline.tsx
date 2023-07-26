import { ProgressBarUnit, TimelineContainer, TimeLineProgressBar, TimelineTooltip } from "@omegup-school/ui-atoms";
import { ControlledTimelineProps } from "./Timeline.types";

export const Timeline = ({
  startDate,
  endDate,
  progressDate,
  progressDateTitle,
  progressWidth,
  toolTipBoxIsOpened,
  totalProgressUnits,
  selectedEvent,
  isShowingChildrenOnHover,
  progressBarUnits,
  onClick,
}: ControlledTimelineProps) => <TimelineContainer  {...{ progressDateTitle, progressDate, startDate, endDate, onClick }}>
    <TimelineTooltip {...{ toolTipBoxIsOpened, selectedEvent }} />
    <TimeLineProgressBar {...{ progressWidth, isShowingChildrenOnHover }} >
      {progressBarUnits?.map(({
        unitIndex,
        leftPercentage,
        children,
      }) =>
        <ProgressBarUnit {...{ unitIndex, leftPercentage, totalProgressUnits }} >
          {children}
        </ProgressBarUnit>)}
    </TimeLineProgressBar>
  </TimelineContainer>











