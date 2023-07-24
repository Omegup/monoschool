import { useTimelineTooltipStyles } from "./TimelineTooltip.styles"
import { ControlledTimeLineToolTipProps } from "./TimelineTooltip.types"

export const TimelineTooltip = ({
  selectedEvent,
  toolTipBoxIsOpened,
}: ControlledTimeLineToolTipProps) => {

  const { toolTipBox, tooltipIcon } = useTimelineTooltipStyles();

  return toolTipBoxIsOpened && selectedEvent !== undefined && (
    <span className={toolTipBox}>
      {selectedEvent.tooltipIcon}
      <span>
        <div>{selectedEvent.period}</div>
        <p>{selectedEvent.name}</p>
      </span>
    </span>
  )
}
