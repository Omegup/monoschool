import { TwoItemsCol } from "@omegup-school/ui-layouts";
import { forwardRef } from "react";
import { SmallText } from "../SmallText";
import { XSmallText } from "../XSmallText";
import { ControlledDoubleTextProps } from "./DoubleText.types";

export const DoubleText = forwardRef((
  props: ControlledDoubleTextProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, subText } = props

  return (
    <TwoItemsCol
      ref={ref}
      item1={<XSmallText text={text} />}
      item2={<SmallText text={subText} />}
    />
  )
})