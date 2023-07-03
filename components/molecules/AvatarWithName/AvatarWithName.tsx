import { forwardRef } from "react";
import { ControlledAvatarWithNameProps } from "./AvatarWithName.types";
import { useAvatarWithNameStyles } from "./AvatarWithName.styles";
import { Text } from "../Text";

export const AvatarWithName = forwardRef((
  props: ControlledAvatarWithNameProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, avatar } = props
  const classes = useAvatarWithNameStyles()

  return (
    <div className={classes.container} ref={ref}>
      {avatar}
      <Text size="small" weight={500} value={text} />
    </div>
  )

})