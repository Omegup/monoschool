export interface TimelineContainerProps {
  children: React.ReactNode;
  startDate: Date;
  endDate: Date;
  progressDate: Date;
  progressDateTitle: string;
}

export interface ControlledTimelineContainerProps
  extends TimelineContainerProps {
  onClick: () => void;
}
