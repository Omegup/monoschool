import { ProgressBarUnit, TimelineContainer, TimeLineProgressBar, TimelineTooltip } from "@omegup-school/ui-atoms";
import { ControlledTimelineProps } from "./Timeline.types";

export const Timeline = ({
  onClick,
  startDate,
  endDate,
  progressDate,
  progressDateTitle,
  progress,
  toolTipBoxIsOpened,
  toolTipIcons,
  totalProgressUnits,
  selectedEvent,
  progressBarUnits }: ControlledTimelineProps) => <TimelineContainer  {...{ progressDateTitle, progressDate, startDate, endDate, onClick }}>
    <TimelineTooltip {...{ toolTipBoxIsOpened, selectedEvent, toolTipIcons }} />
    <TimeLineProgressBar  {...{ totalProgressUnits, progress }} >
      {progressBarUnits.map(({
        unitIndex,
        leftPercentage,
        children,
      }) =>
        <ProgressBarUnit {...{ unitIndex, leftPercentage, totalProgressUnits }} >
          {children}
        </ProgressBarUnit>)}
    </TimeLineProgressBar>
  </TimelineContainer>

