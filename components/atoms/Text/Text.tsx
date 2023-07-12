import { forwardRef } from "react";
import { TextProps } from "./Text.types";
import { useTextStyles } from "./Text.styles";
import { joinClassNames } from "@omegup-school/ui-configs/typography";

export const Text = forwardRef((
  props: TextProps,
  ref?: React.Ref<HTMLSpanElement>
) => {
  const { text, variant, ...styling } = props
  const classes = useTextStyles(styling)
  return (
    <span ref={ref} className={joinClassNames(classes.text, classes[variant])}>
      {text}
    </span>
  )
})