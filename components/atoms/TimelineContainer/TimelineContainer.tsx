import { forwardRef } from "react"
import { useTimelineContainerStyles } from "./TimelineContainer.styles"
import { ControlledTimelineContainerProps } from "./TimelineContainer.types"
import { ContainerStateContext } from "../contexts/pointer"

export const TimelineContainer = forwardRef(({ children, startDate, endDate, progressDate, progressDateTitle, onClick, onMouseOver, onMouseLeave }: ControlledTimelineContainerProps, ref: React.Ref<HTMLInputElement>) => {

  const { main, top, bottom } = useTimelineContainerStyles()
  return (
    <div className={main} {...{ ref }} {...{ onMouseOver, onMouseLeave }}>
      <ContainerStateContext.Provider value={main}>
        <div className={top} {...{ onClick }}>
          <h3>{progressDateTitle}</h3>
          <p>{progressDate}</p>
        </div>
        {children}
        <div className={bottom} {...{ onClick }}>
          <p>{startDate}</p>
          <p>{endDate}</p>
        </div>
      </ContainerStateContext.Provider>
    </div>
  )
})
