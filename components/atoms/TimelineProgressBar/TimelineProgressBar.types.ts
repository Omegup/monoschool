
export interface TimelineProgressBarProps {
  showProgressBarElements: boolean;
  children: React.ReactNode;
}

export interface ControlledTimelineProgressBarProps extends TimelineProgressBarProps {
  progressWidth: number;
}
