import { forwardRef } from "react";
import { TextProps } from "./Text.types";
import { useTextStyles } from "./Text.styles";

export const Text = forwardRef((
  props: TextProps,
  ref?: React.Ref<HTMLSpanElement>
) => {

  const { text, variant } = props
  const clesses = useTextStyles()
  return (
    <span ref={ref} className={clesses[variant]}>
      {text}
    </span>
  )

})