import {
  TimeLineToolTipProps,
  TimelineProgressBarProps,
} from '@omegup-school/ui-atoms';
import { TimelineContainerProps } from '@omegup-school/ui-atoms/TimelineContainer';

type TimelineContainerParentProps = TimelineContainerProps;
type TimelineProgressBarParentProps = TimelineProgressBarProps;

export type TimelineProps = Omit<
  TimelineContainerParentProps & TimelineProgressBarParentProps,
  'children'
>;
export interface TimelineProgressBarElement {
  elementRender: JSX.Element;
  elementPercentagePosition: number;
  elementPercentageWidth: number;
  onClick: () => void;
}
export interface ControlledTimelineProps extends TimelineProps {
  tooltipDataDisplay: TimeLineToolTipProps | null;
  progressBarElements: TimelineProgressBarElement[];
  progressPercentage: number;
  onTimelineContainerClick: () => void;
  onTimelineContainerMouseOver: () => void;
  onTimelineContainerMouseLeave: () => void;
}
