import {  forwardRef } from "react";
import { ContainerProps } from "./FilterContainer.types";
import { useContainerStyles } from "./FilterContainer.styles";

export const FilterContainer = forwardRef((
  props: ContainerProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { children,variant } = props
  const classes = useContainerStyles()

  return (
    <div className={`${classes.container} ${classes[variant]}`} ref={ref}>
         {children.map((item, index) => (
        <>
          {index != 0 ? <div className={classes.line}></div> : <></>}
         {item}
        </>
      ))}
    </div>
  )
})