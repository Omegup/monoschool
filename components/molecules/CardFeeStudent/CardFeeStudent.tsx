import { forwardRef } from "react";
import { ControlledCardFeeStudentProps } from "./CardFeeStudent.types";
import { CardContainerFee, Text } from "@omegup-school/ui-atoms";
import { AvatarWithName } from "../AvatarWithName";
import { DoubleText } from "../DoubleText";
 import { ElementCardDateTags } from "../ElementCardDateTags";

export const CardFeeStudent = forwardRef((
  props: ControlledCardFeeStudentProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { textName, statusText, avatar, subscription, amount, date, status } = props

  return (
    <CardContainerFee
      ref={ref}
      gap={'s3'}
      alignItems="flex-start"
      direction="column"
      justifyContent="start"
      paddingBlock="s5"
      paddingInline="s5"
      AvatarWithName={<AvatarWithName text={textName ?? ""} avatar={avatar} />}
      DoubleText={<DoubleText text={subscription ?? ""} subText={amount ?? ""} />}
      ElementCardWithDateTags={<ElementCardDateTags text={statusText ?? ""} status={status} date={date ?? ""} />}
    />
  )
})