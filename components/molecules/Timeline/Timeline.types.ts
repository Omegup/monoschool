import { TimeLineToolTipProps, TimelineProgressBarProps } from '@omegup-school/ui-atoms';
import { TimelineContainerProps } from '@omegup-school/ui-atoms/TimelineContainer';

type TimelineContainerParentProps = Omit<TimelineContainerProps, 'children'>;
type TimelineProgressBarParentProps = Pick<
  TimelineProgressBarProps,
  'isShowingChildrenOnHover'
>;

export type TimelineProps = TimelineContainerParentProps &
  TimelineProgressBarParentProps;
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
}
