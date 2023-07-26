import { useTimelineTooltipStyles } from "./TimelineTooltip.styles"
import { ControlledTimeLineToolTipProps } from "./TimelineTooltip.types"

export const TimelineTooltip = ({
  selectedEvent,
  toolTipBoxIsOpened,
}: ControlledTimeLineToolTipProps) => {

  const { toolTipBox } = useTimelineTooltipStyles();

  return toolTipBoxIsOpened && (
    <span className={toolTipBox}>
      {selectedEvent?.tooltipIcon}
      <span>
        <div>{selectedEvent?.period}</div>
        <p>{selectedEvent?.name}</p>
      </span>
    </span>
  )
}
