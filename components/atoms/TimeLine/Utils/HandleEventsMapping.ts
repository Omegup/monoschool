import * as Icons from '@omegup-school/ui-assets/icons';
export interface TimelineEvent {
  name: string;
  startDate: Date;
  endDate?: Date;
  progressBarIcon: keyof typeof Icons;
  tooltipIcon: keyof typeof Icons;
}

/**
 * map the EventsData into it's corresponding month in the timeline
 * @param EventsData array of events that will take place in the timeline
 * @param existMonthsIndexes indexes of months that exists in the timeline
 * @returns return an array of mapped months with their corresponding events
 */
export const handleEventsMapping = (
  EventsData: TimelineEvent[],
  existMonthsIndexes: { monthIndex: number }[]
) => {
  let mappedMonths: {
    monthIndex: number;
    leftPercentage: string;
    events: TimelineEvent[];
  }[] = [];
  const numbersOfMonths = existMonthsIndexes.length;
  mappedMonths = existMonthsIndexes.map(({ monthIndex }, index) => {
    const events = EventsData.filter(
      (event) => event.startDate.getMonth() === monthIndex
    );
    return {
      leftPercentage: `${(index * 100) / numbersOfMonths}`,
      events,
      monthIndex,
    };
  });
  return { mappedMonths };
};
