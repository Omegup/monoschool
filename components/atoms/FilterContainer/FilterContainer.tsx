import {  forwardRef } from "react";
import { ContainerProps } from "./FilterContainer.types";
import { useContainerStyles } from "./FilterContainer.styles";
import React from "react";

export const FilterContainer = forwardRef((
  props: ContainerProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { children,hasSeparatedLine } = props
  const classes = useContainerStyles()
 

  return (
    <div className={`${classes.container} ${hasSeparatedLine ? classes.hasSeparatedLine :""}`} ref={ref}>
         {React.Children.map(children, (item, index) => (
        <>
          { hasSeparatedLine && index != 0 ? <div className={classes.line}></div> : <></>}
         {item}
        </>
      ))}
    </div>
  )
})