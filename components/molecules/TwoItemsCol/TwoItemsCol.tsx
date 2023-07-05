import { forwardRef } from "react";
import { ControlledTwoItemsColProps } from "./TwoItemsCol.types";
import { Container } from "@omegup-school/ui-atoms";

export const TwoItemsCol = forwardRef((
  props: ControlledTwoItemsColProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { children } = props

  return (
    <Container
      ref={ref}
      direction="column"
      alignItems="start"
    >{children}</Container>
  )
})