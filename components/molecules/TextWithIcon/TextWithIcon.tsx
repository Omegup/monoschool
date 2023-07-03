import { forwardRef } from "react";
import { ControlledTextWithIconProps } from "./TextWithIcon.types";
import { useTextWithIconStyles } from "./TextWithIcon.styles";
import { Text } from "../Text";
import { IconContainer } from "../IconContainer";

export const TextWithIcon = forwardRef((
  props: ControlledTextWithIconProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, icon, padding } = props
  const classes = useTextWithIconStyles()

  return (
    <div className={classes.container} ref={ref}>
      <IconContainer {...{ icon, padding }} />
      <Text size="XSmall" weight={400} value={text} />
    </div>
  )

})