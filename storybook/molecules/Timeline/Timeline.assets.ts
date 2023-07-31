import * as Icons from '@omegup-school/ui-assets/icons';


///timelineCell Assets 

export const pad = (n: number) => n < 10 ? `0${n}` : n;

export const displayDate = (date: Date) => `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`

export const displayPeriod = (startDate: Date, endDate?: Date) => `${displayDate(startDate)} ${endDate ? "au" : ""} ${endDate ? displayDate(endDate) : ""}`


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

/**
 * calculate the percentage of progress of the current date  in a timeline of a single year
 * that has startDate and endDate  and search for  the existed months in the timeline
 * @param toDay today date
 * @param startDate start date of the timeline
 * @param endDate end date of the timeline
 * @returns return the months progress and the days progress  and the existed months indexes
 */
export const timeLineProgress = (toDay: Date, startDate : Date , endDate : Date)=>{
  let monthsProgress: number = toDay.getMonth() - startDate.getMonth();
  let existMonthsIndexes : {monthIndex : number}[]= [];
  if (startDate.getMonth() < endDate.getMonth()) {
      for (let monthIndex = startDate.getMonth() ; monthIndex <= endDate.getMonth(); monthIndex++) {
          existMonthsIndexes.push({monthIndex});
      }
  }
  else{
      //reminder : the Date().getMonth() is zero based because it return values from  0 to 11
      monthsProgress = ( toDay.getMonth() >= startDate.getMonth() ) ? toDay.getMonth() - startDate.getMonth() : toDay.getMonth() + 11 - startDate.getMonth() +1;
      for (let monthIndex = startDate.getMonth() ; monthIndex <= 11; monthIndex++) {
              existMonthsIndexes.push({monthIndex});
      }
      for (let monthIndex = 0 ; monthIndex <=  endDate.getMonth(); monthIndex++) {
          existMonthsIndexes.push({monthIndex});
      }
  }
  //in new Date(year,month,day) when we put 0 in the value of the day, this will give us the last day of the current month.
  const lastDayOfTheCurrentMonth = new Date(toDay.getFullYear(), toDay.getMonth() + 1, 0);
  const numbersOfDays = lastDayOfTheCurrentMonth.getDate()
  const daysProgress = toDay.getDate() / numbersOfDays 
  return{monthsProgress , daysProgress , existMonthsIndexes} 
}


