import { TimeLineToolTipProps } from '@omegup-school/ui-atoms';
import { Timeline, ControlledTimelineProps, TimelineProgressBarElement } from '@omegup-school/ui-molecules';
import type { Meta, StoryObj } from '@storybook/react';
import { useMemo, useState } from 'react';
import { Icon } from './Icon';
import * as Icons from '@omegup-school/ui-assets/icons';
import { handleEventsMapping, timeLineProgress } from '@omegup-school/ui-atoms/TimeLine/Utils';
import { TimelineEvent } from '@omegup-school/ui-atoms/TimeLine/Utils/HandleEventsMapping';


const pad = (n: number) => n < 10 ? `0${n}` : n;

const displayDate = (date: Date) => `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`

const displayPeriod = (startDate: Date, endDate?: Date) => `${displayDate(startDate)} ${endDate ? "au" : ""} ${endDate ? displayDate(endDate) : ""}`



const TimelineCell = () => {
  const events: TimelineEvent[] = useMemo(() => [
    {
      name: "Vacances de la seconde moitié du deuxieme semestre",
      startDate: new Date('2023-01-06'),
      endDate: new Date('2023-02-23'),
      progressBarIcon: "Calendar",
      tooltipIcon: "Holiday",
    },
    {
      name: "Examains de deuxieme semestre",
      startDate: new Date('2023-03-23'),
      endDate: new Date('2023-03-15'),
      progressBarIcon: "Exam",
      tooltipIcon: "Checkmark",
    },
    {
      name: "Vacances de printemps",
      startDate: new Date('2023-03-20'),
      endDate: new Date('2023-04-02'),
      progressBarIcon: "Calendar",
      tooltipIcon: "Holiday",
    },
    {
      name: "Féte de I'Aid al-Fitr",
      startDate: new Date('2023-04-22'),
      endDate: new Date('2023-04-24'),
      progressBarIcon: "EidFitr",
      tooltipIcon: "EidDay",
    },
    {
      name: "Féte du travail",
      startDate: new Date('2023-05-01'),
      progressBarIcon: "Calendar",
      tooltipIcon: "Holiday",
    },
    {
      name: "Fête de l'Aïd al-Adhha",
      startDate: new Date('2023-06-21'),
      endDate: new Date('2023-06-24'),
      progressBarIcon: "EidAdhha",
      tooltipIcon: "HappyEidAlAdha",
    },
  ], [])
  const startDate = useMemo(() => new Date('2023-09-15'), [])
  const endDate = useMemo(() => new Date('2024-06-30'), [])
  const progressDate = useMemo(() => new Date('2024-1-15'), [])
  const progressDateTitle = useMemo(() => 'Aujourd\'hui', [])
  const isShowingChildrenOnHover = useMemo(() => true, [])
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const closeToolTipBox = () => setSelectedEvent(null);
  const { monthsProgress, daysProgress, existMonthsIndexes } = useMemo(() => timeLineProgress(progressDate, startDate, endDate), [startDate, endDate])
  let { mappedMonths } = useMemo(() => handleEventsMapping(events, existMonthsIndexes), [events, existMonthsIndexes])
  const progressPercentage = (monthsProgress + daysProgress) * 100 / mappedMonths.length;
  const progressBarElements: TimelineProgressBarElement[] = useMemo(() => mappedMonths.map(({ leftPercentage, monthIndex, events }, key) => ({
    elementRender: <>
      {events.map((event, key) => <Icon onClick={() => setSelectedEvent(event)} name={event.progressBarIcon} height='22' width='22' color={'#BAE2FF'} />)}
    </>,
    elementPercentagePosition: +leftPercentage,
    elementPercentageWidth: 100 / mappedMonths.length,
    onClick: () => console.log({ monthIndex }),
  })), [events])

  const tooltipDataDisplay = useMemo(() => selectedEvent ? {
    tooltipTitle: selectedEvent.name,
    tooltipDescription: displayPeriod(selectedEvent.startDate, selectedEvent.endDate),
    tooltipIcon: <Icon name={selectedEvent.tooltipIcon} />
  } satisfies TimeLineToolTipProps : null, [selectedEvent])

  return <Timeline onTimelineContainerClick={closeToolTipBox} {...{ startDate: displayDate(startDate), endDate: displayDate(endDate), progressDate: displayDate(progressDate), progressBarElements, progressDateTitle, progressPercentage, selectedEvent, isShowingChildrenOnHover, tooltipDataDisplay }} />
}

const meta = {
  title: 'Molecules/TimeLine',
  component: TimelineCell,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof TimelineCell>;

export default meta;
type Story = StoryObj<typeof TimelineCell>;

export const Primary: Story = {
  args: {
  },
};
