export interface TimeLineToolTipProps {
  selectedEvent?: EventModel<
    keyof IconsCollection['timeLineIcons'],
    keyof IconsCollection['toolTipIcons']
  >;
  toolTipBoxIsOpened: boolean;
}

export interface ControlledTimeLineToolTipProps extends TimeLineToolTipProps {

};
