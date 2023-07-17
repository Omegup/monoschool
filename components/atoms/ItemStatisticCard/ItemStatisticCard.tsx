import {  forwardRef } from "react";
import { ControlledItemStatisticCardProps } from "./ItemStatisticCard.types";
import { useItemStatisticCardStyles } from "./ItemStatisticCard.styles";

export const ItemStatisticCard = forwardRef((
  props: ControlledItemStatisticCardProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { } = props
  const classes = useItemStatisticCardStyles()

  return (
    <div className={classes.container} ref={ref}>
      {children}
    </div>
  )
})