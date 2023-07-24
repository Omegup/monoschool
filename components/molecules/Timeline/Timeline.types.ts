import {
  ControlledProgressBarUnitProps,
  ProgressBarUnitProps,
} from '@omegup-school/ui-atoms/ProgressBarUnit';
import { TimeLineToolTipProps } from '@omegup-school/ui-atoms/TimeLine/Components/Tooltip';
import {
  ControlledTimelineContainerProps,
  TimelineContainerProps,
} from '@omegup-school/ui-atoms/TimelineContainer';
import {
  ControlledTimelineProgressBarProps,
  TimelineProgressBarProps,
} from '@omegup-school/ui-atoms/TimelineProgressBar';

export type ProgressBarUnit = {
  leftPercentage: number;
  unitIndex: number;
  children: React.ReactNode;
};
export type TimelineProps = TimelineContainerProps &
  TimelineProgressBarProps &
  ProgressBarUnitProps &
  TimeLineToolTipProps;
export type ControlledTimelineProps = Omit<
  ControlledTimelineContainerProps &
    ControlledTimelineProgressBarProps &
    ControlledProgressBarUnitProps &
    TimeLineToolTipProps & {
      progressBarUnits: ProgressBarUnit[];
    },
  'children' | 'unitIndex' | 'leftPercentage'
>;
