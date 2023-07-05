import { forwardRef } from "react";
import { ControlledAvatarWithNameProps } from "./AvatarWithName.types";
import { SmallText ,TwoItemsRow} from "@omegup-school/ui-molecules";

export const AvatarWithName = forwardRef((
  props: ControlledAvatarWithNameProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, avatar } = props

  return (
    <TwoItemsRow ref={ref}>
      {avatar}
      < SmallText text={text} />
    </TwoItemsRow>
  )
})