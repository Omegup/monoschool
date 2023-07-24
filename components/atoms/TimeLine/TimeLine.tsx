import { useEffect, useMemo, useState } from 'react';
import { TimeLineProgressBar } from '../TimelineProgressBar';
import { timeLineIcons, toolTipIcons } from './Assets';
import { ToolTip } from './Components';
import { useStyles } from "./Styles/TimeLine.style";
import { handleEventsMapping, timeLineProgress } from './Utils';
import { ProgressBarUnit } from '../ProgressBarUnit';
import { TimelineContainer } from '../TimelineContainer';
import { TimelineTooltip } from '../TimelineTooltip';
//To do Remove the  default values of startDate and endDate and events 
//because they exist just for testing purpose because we should make them required and pass them as props instead


const pad = (n: number) => n < 10 ? `0${n}` : n ;

const displayDate = (date: Date) => `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`

const displayPeriod = (startDate: Date, endDate?: Date) => `${displayDate(startDate)} ${endDate ? "au" :""} ${endDate ? displayDate(endDate) : ""}`



export const Timeline = ({
  startDate = new Date('2023-09-15'),
  endDate = new Date('2024-06-30'),
  toDay = new Date('2024-1-15'),
  iconsCollection = { toolTipIcons, timeLineIcons },
  outsideEvents = [
    {
      name: "Vacances de la seconde moitié du deuxieme semestre",
      startDate: new Date('2024-01-06'),
      endDate: new Date('2024-02-23'),
      period: displayPeriod(new Date('2024-01-06'), new Date('2024-02-23')),
      icon: "Calendar",
      tooltipIcon: "Holiday",
    },
    {
      name: "Examains de deuxieme semestre",
      startDate: new Date('2024-03-23'),
      endDate: new Date('2024-03-15'),
      period: displayPeriod(new Date('2024-03-23'), new Date('2024-03-15')),
      icon: "Exam",
      tooltipIcon: "Checkmark",
    },
    {
      name: "Vacances de printemps",
      startDate: new Date('2024-03-20'),
      endDate: new Date('2024-04-02'),
      period: displayPeriod(new Date('2024-03-20'), new Date('2024-04-02')),
      icon: "Calendar",
      tooltipIcon: "Holiday",
    },
    {
      name: "Ramadhan 2024",
      startDate: new Date('2024-03-24'),
      endDate: new Date('2024-04-21'),
      period: displayPeriod(new Date('2024-03-24'), new Date('2024-04-21')),
      icon: "Ramadhan",
      tooltipIcon: "Fastonn",
    },
    {
      name: "Féte de I'Aid al-Fitr",
      startDate: new Date('2024-04-22'),
      endDate: new Date('2024-04-24'),
      period: displayPeriod(new Date('2024-04-22'), new Date('2024-04-24')),
      icon: "EidFitr",
      tooltipIcon: "EidDay",
    },
    {
      name: "Féte du travail",
      startDate: new Date('2024-05-01'),
      period: displayPeriod(new Date('2024-05-01')),
      icon: "Calendar",
      tooltipIcon: "Holiday",
    },
    {
      name: "Fête de l'Aïd al-Adhha",
      startDate: new Date('2024-06-21'),
      endDate: new Date('2024-06-24'),
      period: displayPeriod(new Date('2024-06-21'), new Date('2024-06-24')),
      icon: "EidAdhha",
      tooltipIcon: "HappyEidAlAdha",
    },
  ]
}: {
  startDate?: Date,
  endDate?: Date
  toDay?: Date,
  iconsCollection?: IconsCollection,
  outsideEvents?: EventModel<keyof typeof iconsCollection.toolTipIcons, keyof typeof iconsCollection.timeLineIcons>[]
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [toolTipBoxIsOpened, setToolTipBoxIsOpened] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<EventModel<keyof typeof iconsCollection.toolTipIcons, keyof typeof iconsCollection.timeLineIcons>>();
  const events = useMemo(() => outsideEvents.map(({icon , tooltipIcon })=>({
    ...outsideEvents,
    icon : iconsCollection.timeLineIcons[icon],
    tooltipIcon : iconsCollection.toolTipIcons[tooltipIcon]
  })), [outsideEvents])
  const closeToolTipBox = () => setToolTipBoxIsOpened(false)
  const { monthsProgress, daysProgress, existMonthsIndexes } = useMemo(() => timeLineProgress(toDay, startDate, endDate), [startDate, endDate])
  let { mappedMonths } = useMemo(() => handleEventsMapping(events, existMonthsIndexes), [events, existMonthsIndexes])
  useEffect(() => {
    setProgress((monthsProgress) + daysProgress);
  }, [progress]);
  const { iconStyle, top, bottom, main, monthArea } = useStyles();


  type ProgressBarUnit = {
    leftPercentage: number,
    unitIndex: number,
    children: React.ReactNode
  };
  const totalProgressUnits = mappedMonths.length;


  const progressBarUnits: ProgressBarUnit[] = mappedMonths.map((month, MonthIndex) => ({
    leftPercentage: Number(month.leftPercentage),
    unitIndex: MonthIndex,
    children: month.events.map((event, index) => <span onClick={() => {
      setSelectedEvent(event)
      if (!toolTipBoxIsOpened) {
        setToolTipBoxIsOpened(true)
      }

    }}> {iconsCollection.timeLineIcons[event.icon as keyof typeof timeLineIcons]({ className: iconStyle })} </span>
    )
  }))

  const progressDateTitle = "Demain";
  const progressDate = toDay;

  return (
    <TimelineContainer  onClick={closeToolTipBox} {...{ progressDateTitle, progressDate, startDate, endDate, }}>
      <TimelineTooltip {...{ toolTipBoxIsOpened, selectedEvent }} />
      <TimeLineProgressBar isShowingChildrenOnHover  {...{ totalProgressUnits, progress }} >
        {progressBarUnits.map(({
          unitIndex,
          leftPercentage,
          children,
        }) =>
          <ProgressBarUnit {...{ unitIndex, leftPercentage, totalProgressUnits }} >
            {children}
          </ProgressBarUnit>)}
      </TimeLineProgressBar>
    </TimelineContainer>
  );
};

