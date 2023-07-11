import { forwardRef } from "react";
import { ControlledCardContainerFeeProps } from "./CardContainerFee.types";
import { useCardContainerFeeStyles } from "./CardContainerFee.styles";

export const CardContainerFee = forwardRef((
  props: ControlledCardContainerFeeProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { AvatarWithName, DoubleText, ElementCardWithDateTags, ...styling } = props
  const classes = useCardContainerFeeStyles(styling)

  return (
    <div className={classes.container} ref={ref}>
      <div className={classes.avatarWithName}  >
        { AvatarWithName
        }
      </div>
      <div className={classes.doubleText}  >
        {
          DoubleText
        }
      </div>
      <div className={classes.ElementCardWithDateTags}  >
        {
          ElementCardWithDateTags
        }
      </div>
    </div>
  )
})