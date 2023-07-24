
export interface TimelineProgressBarProps {
  children: React.ReactNode;
  isShowingChildrenOnHover?: boolean;
}

export interface ControlledTimelineProgressBarProps extends TimelineProgressBarProps {
  progress: number;
  totalProgressUnits: number;
}
