import { forwardRef } from "react";
import { ControlledTextWithIconProps } from "./TextWithIcon.types";
import { XSmallText ,TwoItemsRow} from "@omegup-school/ui-molecules";

export const TextWithIcon = forwardRef((
  props: ControlledTextWithIconProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { icon, text } = props

  return (
    <TwoItemsRow
      ref={ref}
      children={
        [icon,
          <XSmallText text={text} />
        ]}
    />
  )
})