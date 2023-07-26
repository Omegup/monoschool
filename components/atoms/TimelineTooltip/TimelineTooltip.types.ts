
export interface TimeLineToolTipEvent {
  name: string;
  startDate: Date;
  endDate?: Date;
  period: string;
  icon: JSX.Element;
  tooltipIcon: JSX.Element;
}

export interface TimeLineToolTipProps {
  selectedEvent?: TimeLineToolTipEvent;
  toolTipBoxIsOpened: boolean;
}

export interface ControlledTimeLineToolTipProps extends TimeLineToolTipProps {}
