import { useTimelineTooltipStyles } from "./TimelineTooltip.styles"
import { ControlledTimeLineToolTipProps } from "./TimelineTooltip.types"

export const TimelineTooltip = ({
  tooltipIcon,
  tooltipDescription,
  tooltipTitle,
}: ControlledTimeLineToolTipProps) => {

  const { toolTipBox } = useTimelineTooltipStyles();

  return (
    <span className={toolTipBox}>
      {tooltipIcon}
      <span>
        <div>{tooltipTitle}</div>
        <p>{tooltipDescription}</p>
      </span>
    </span>
  )
}
