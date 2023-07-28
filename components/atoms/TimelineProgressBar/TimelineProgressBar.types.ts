
export interface TimelineProgressBarProps {
  isShowingChildrenOnHover?: boolean;
  children: React.ReactNode;
}

export interface ControlledTimelineProgressBarProps extends TimelineProgressBarProps {
  progressWidth: number;
}
