import { TwoItemsRow } from "@omegup-school/ui-layouts";
import { forwardRef } from "react";
import { SmallText } from "../SmallText";
import { ControlledAvatarWithNameProps } from "./AvatarWithName.types";

export const AvatarWithName = forwardRef((
  props: ControlledAvatarWithNameProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, avatar } = props

  return (
    <TwoItemsRow
      ref={ref}
      item1={avatar}
      item2={< SmallText text={text} />}
    />
  )
})