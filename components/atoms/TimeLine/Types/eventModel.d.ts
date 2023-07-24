interface EventModel<T , K> {
    name: string ,
    startDate: Date ,
    endDate?: Date ,
    period: string ,
    icon: T ,
    tooltipIcon: K ,
}
