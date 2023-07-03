import { forwardRef } from "react";
import { ControlledDoubleTextProps } from "./DoubleText.types";
import { useDoubleTextStyles } from "./DoubleText.styles";
import { Text } from "../Text";

export const DoubleText = forwardRef((
  props: ControlledDoubleTextProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { text, subText } = props
  const classes = useDoubleTextStyles()

  return (
    <div className={classes.container} ref={ref}>
      <Text size="XSmall" weight={400} value={text} />
      <Text size="small" weight={500} value={subText} />
    </div>
  )

})