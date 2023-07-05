import { ItemPS5, TwoItemsCol, TwoItemsRow } from "@omegup-school/ui-layouts";
import { forwardRef } from "react";
import { SmallText } from "../SmallText";
import { XSmallText } from "../XSmallText";
import { ControlledIconWithDoubleTextProps } from "./IconWithDoubleText.types";

export const IconWithDoubleText = forwardRef((
  props: ControlledIconWithDoubleTextProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, subText, icon } = props

  return (<TwoItemsRow
    ref={ref}
    item1={<ItemPS5
      item={icon}
    />}
    item2={<TwoItemsCol
      item1={<XSmallText text={text} />}
      item2={<SmallText text={subText} />}
    />}
  />
  )
})