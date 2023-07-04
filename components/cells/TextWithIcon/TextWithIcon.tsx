import { forwardRef } from "react";
import { ControlledTextWithIconProps } from "./TextWithIcon.types";
import { IconContainer } from "@omegup-school/ui-molecules";
import { TwoItemsRow } from "@omegup-school/ui-layouts";
import { XSmallText } from "../XSmallText";

export const TextWithIcon = forwardRef((
  props: ControlledTextWithIconProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { icon, text } = props

  return (
    <TwoItemsRow
      ref={ref}
      item1={<IconContainer {...{ icon }} />}
      item2={<XSmallText text={text} />}
    />
  )
})