import { forwardRef } from "react";
import { ControlledDoubleTextProps } from "./DoubleText.types";
import { SmallText, XSmallText ,TwoItemsCol} from "@omegup-school/ui-molecules";

export const DoubleText = forwardRef((
  props: ControlledDoubleTextProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, subText } = props

  return (
    <TwoItemsCol ref={ref}>
      <XSmallText text={text} />
      <SmallText text={subText} />
    </TwoItemsCol>
  )
})