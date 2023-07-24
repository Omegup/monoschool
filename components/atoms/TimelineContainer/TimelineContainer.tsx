import { forwardRef } from "react"
import { useTimelineContainerStyles } from "./TimelineContainer.styles"
import { ControlledTimelineContainerProps } from "./TimelineContainer.types"
import { ContainerStateContext } from "../contexts/pointer"

export const TimelineContainer = forwardRef(({ children, startDate, endDate, progressDate, progressDateTitle, onClick }: ControlledTimelineContainerProps, ref: React.Ref<HTMLInputElement>) => {

  const { main, top, bottom } = useTimelineContainerStyles()
  return (
    <ContainerStateContext.Provider value={main}>
      <div className={main} {...{ ref }} >
        <div className={top} {...{ onClick }}>
          <h3>{progressDateTitle}</h3>
          <p>{`${progressDate.getDate()}/${progressDate.getMonth() + 1}/${progressDate.getFullYear()}`}</p>
        </div>
        {children}
        <div className={bottom} {...{ onClick }}>
          <p>{`${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`}</p>
          <p>{`${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`}</p>
        </div>
      </div>
    </ContainerStateContext.Provider>
  )
})
