import { useEffect, useMemo, useState } from 'react';
import { TimeLineProgressBar } from '../TimelineProgressBar';
import { timeLineIcons, toolTipIcons } from './Assets';
import { ToolTip } from './Components';
import { useStyles } from "./Styles/TimeLine.style";
import { handleEventsMapping, timeLineProgress } from './Utils';
import { ProgressBarUnit } from '../ProgressBarElement';
import { TimelineContainer } from '../TimelineContainer';
import { TimeLineToolTipEvent, TimelineTooltip } from '../TimelineTooltip';
//To do Remove the  default values of startDate and endDate and events 
//because they exist just for testing purpose because we should make them required and pass them as props instead


const pad = (n: number) => n < 10 ? `0${n}` : n;

const displayDate = (date: Date) => `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`

const displayPeriod = (startDate: Date, endDate?: Date) => `${displayDate(startDate)} ${endDate ? "au" : ""} ${endDate ? displayDate(endDate) : ""}`


const DstartDate = new Date('2023-09-15')
const DendDate = new Date('2024-06-30')
const DprogressDate = new Date('2024-1-15')

const { monthsProgress, daysProgress, existMonthsIndexes } = timeLineProgress(DprogressDate, DstartDate, DendDate)




export const Timeline = ({
  startDate = displayDate(DstartDate),
  endDate = displayDate(DendDate),
  progressDate = displayDate(DprogressDate),
}: {
  startDate?: string,
  endDate?: string
  progressDate?: string,
  events?: TimeLineToolTipEvent[]
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [toolTipBoxIsOpened, setToolTipBoxIsOpened] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<TimeLineToolTipEvent>();
  const { iconStyle, tooltipIcon } = useStyles();


  const events = useMemo(() => [
    {
      name: "Vacances de la seconde moitié du deuxieme semestre",
      startDate: new Date('2024-01-06'),
      endDate: new Date('2024-02-23'),
      period: displayPeriod(new Date('2024-01-06'), new Date('2024-02-23')),
      icon: timeLineIcons.Calendar({ className: iconStyle }),
      tooltipIcon: toolTipIcons.Holiday({ className: tooltipIcon }),
    },
    {
      name: "Examains de deuxieme semestre",
      startDate: new Date('2024-03-23'),
      endDate: new Date('2024-03-15'),
      period: displayPeriod(new Date('2024-03-23'), new Date('2024-03-15')),
      icon: timeLineIcons.Exam({ className: iconStyle }),
      tooltipIcon: toolTipIcons.Checkmark({ className: tooltipIcon }),
    },
    {
      name: "Vacances de printemps",
      startDate: new Date('2024-03-20'),
      endDate: new Date('2024-04-02'),
      period: displayPeriod(new Date('2024-03-20'), new Date('2024-04-02')),
      icon: timeLineIcons.Calendar({ className: iconStyle }),
      tooltipIcon: toolTipIcons.Holiday({ className: tooltipIcon }),
    },
    {
      name: "Ramadhan 2024",
      startDate: new Date('2024-03-24'),
      endDate: new Date('2024-04-21'),
      period: displayPeriod(new Date('2024-03-24'), new Date('2024-04-21')),
      icon: timeLineIcons.Ramadhan({ className: iconStyle }),
      tooltipIcon: toolTipIcons.Fastonn({ className: tooltipIcon }),
    },
    {
      name: "Féte de I'Aid al-Fitr",
      startDate: new Date('2024-04-22'),
      endDate: new Date('2024-04-24'),
      period: displayPeriod(new Date('2024-04-22'), new Date('2024-04-24')),
      icon: timeLineIcons.EidFitr({ className: iconStyle }),
      tooltipIcon: toolTipIcons.EidDay({ className: tooltipIcon }),
    },
    {
      name: "Féte du travail",
      startDate: new Date('2024-05-01'),
      period: displayPeriod(new Date('2024-05-01')),
      icon: timeLineIcons.Calendar({ className: iconStyle }),
      tooltipIcon: toolTipIcons.Holiday({ className: tooltipIcon }),
    },
    {
      name: "Fête de l'Aïd al-Adhha",
      startDate: new Date('2024-06-21'),
      endDate: new Date('2024-06-24'),
      period: displayPeriod(new Date('2024-06-21'), new Date('2024-06-24')),
      icon: timeLineIcons.EidAdhha({ className: iconStyle }),
      tooltipIcon: toolTipIcons.HappyEidAlAdha({ className: tooltipIcon }),
    },
  ], [])

  const closeToolTipBox = () => setToolTipBoxIsOpened(false)
  let { mappedMonths } = handleEventsMapping(events, existMonthsIndexes)
  useEffect(() => {
    setProgress((monthsProgress) + daysProgress);
  }, [progress]);


  type ProgressBarUnit = {
    leftPercentage: number,
    unitIndex: number,
    children: React.ReactNode
  };
  const totalProgressUnits = mappedMonths.length;

  const progressBarUnits: ProgressBarUnit[] =
    mappedMonths.map((month, MonthIndex) => ({
      leftPercentage: Number(month.leftPercentage),
      unitIndex: MonthIndex,
      children: month.events.map((event, key) => <span {...{ key }} onClick={() => {
        setSelectedEvent(event)
        if (!toolTipBoxIsOpened) {
          setToolTipBoxIsOpened(true)
        }
      }}> {event.icon}</span>
      )
    }))

  const progressDateTitle = "Demain";
  const progressWidth = (progress * 100) / totalProgressUnits;

  return (
    <TimelineContainer onClick={closeToolTipBox} {...{ progressDateTitle, progressDate, startDate, endDate, }}>
      <TimeLineProgressBar  {...{ progressWidth }} />
    </TimelineContainer>
  );
};

