export interface TimelineContainerProps {
  children: React.ReactNode;
  startDate: string;
  endDate: string;
  progressDate: string;
  progressDateTitle: string;
}

export interface ControlledTimelineContainerProps
  extends TimelineContainerProps {
  onClick: () => void;
}
