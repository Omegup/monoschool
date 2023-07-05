import { forwardRef } from "react";
import { ControlledIconWithDoubleTextProps } from "./IconWithDoubleText.types";
import { SmallText, XSmallText, ItemPS5, TwoItemsCol, TwoItemsRow } from "@omegup-school/ui-molecules";

export const IconWithDoubleText = forwardRef((
  props: ControlledIconWithDoubleTextProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, subText, icon } = props

  return (<TwoItemsRow ref={ref}  >
    <ItemPS5
      item={icon}
    />
    <TwoItemsCol>
      <XSmallText text={text} />
      <SmallText text={subText} />
    </TwoItemsCol>
  </TwoItemsRow>
  )
})