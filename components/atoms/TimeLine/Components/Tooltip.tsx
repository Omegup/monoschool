import { useStyles } from "../Styles/ToolTip.style";

export interface TimeLineToolTipProps {
  selectedEvent?: EventModel<keyof IconsCollection["timeLineIcons"], keyof IconsCollection["toolTipIcons"]>,
  toolTipIcons: IconsCollection["toolTipIcons"],
  toolTipBoxIsOpened: boolean
}

export const ToolTip = ({
  selectedEvent,
  toolTipIcons,
  toolTipBoxIsOpened,
}: TimeLineToolTipProps) => {
  const displayDate = (date: Date) => {
    const padDate = (n: number) => n < 10 ? `0${n}` : n;
    return `${(date.getDate())}/0${date.getMonth() + 1}/${date.getFullYear()}`

    

    if (date.getMonth() < 10) {
      if (date.getDate() < 10) {
        return `0${date.getDate()}/0${date.getMonth() + 1}/${date.getFullYear()}`
      } else {
        return `${date.getDate()}/0${date.getMonth() + 1}/${date.getFullYear()}`
      }
    }
    if (date.getDate() < 10) {
      return `0${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    } else {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
  }
  const { toolTipBox, tooltipIcon } = useStyles();

  return toolTipBoxIsOpened && selectedEvent !== undefined && (
    <span className={toolTipBox}>
      {toolTipIcons[selectedEvent.tooltipIcon as keyof typeof toolTipIcons]({ className: tooltipIcon })}
      <span>
        <div><p>{displayDate(selectedEvent.startDate)}</p>
          {selectedEvent.endDate && <p>{"au " + displayDate(selectedEvent.endDate)}</p>}</div>
        <p>{selectedEvent.name}</p>
      </span>
    </span>
  )
}
