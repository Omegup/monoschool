import { forwardRef } from "react";
import { ControlledTextProps } from "./Text.types";
import { useTextStyles } from "./Text.styles";

export const Text = forwardRef((
  props: ControlledTextProps,
  ref?: React.Ref<HTMLLabelElement>
) => {

  const { value, weight, size } = props
  const { textStyle } = useTextStyles({ weight, size })

  return (
    <label ref={ref} className={textStyle}>
      {value}
    </label>
  )

})