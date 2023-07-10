import {  forwardRef } from "react";
import { ContainerProps } from "./FilterContainer.types";
import { useContainerStyles } from "./FilterContainer.styles";
import React from "react";

export const FilterContainer = forwardRef((
  props: ContainerProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { children,variant } = props
  const classes = useContainerStyles()

  return (
    <div className={`${classes.container} ${classes[variant]}`} ref={ref}>
         {React.Children.map(children, (item, index) => (
        <>
          {index != 0 ? <div className={classes.line}></div> : <></>}
         {item}
        </>
      ))}
    </div>
  )
})