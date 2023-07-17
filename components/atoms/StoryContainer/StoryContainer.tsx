import { forwardRef, useRef, useState } from "react";
import { ControlledStoryContainerProps } from "./StoryContainer.types";
import { useStoryContainerStyles } from "./StoryContainer.styles";

export const StoryContainer = forwardRef((
  props: ControlledStoryContainerProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { leftNavigator, rightNavigator, children,createElement, elementWidth, ...styling } = props
  const classes = useStoryContainerStyles(styling)
  const listRef = useRef(null);
  const  [counter,setCounter]= useState( 0);
  const handlePrevClick = () => {
    if (listRef.current) {
      listRef.current.scrollTo({
        left: listRef.current.scrollLeft - (elementWidth ?? 100),
        behavior: 'smooth',
      });
      if (counter > 0) {
        setCounter(counter-1)
      }
    }
  };
  const handleNextClick = () => {
    if (listRef.current) {
      listRef.current.scrollTo({
        left: listRef.current.scrollLeft + (elementWidth ?? 100),
        behavior: 'smooth',
      });
      setCounter(counter+1)
    }
  };

  return (
    <div className={classes.StoryContainer} ref={ref} data-flickity-options='{ "wrapAround": true }'>
      
      <div onClick={() => { }} className={classes.createElement}>
        {createElement}
        </div>
      {(counter > 0) && <div onClick={handlePrevClick} className={classes.rightNavigator}>
        {leftNavigator}
      </div>
      }
      <div ref={listRef} className={classes.childrenList}  >
         {children}
         </div>
      
      <div onClick={handleNextClick} className={classes.rightNavigator}>
        {rightNavigator}
      </div>
    </div>
  )
})