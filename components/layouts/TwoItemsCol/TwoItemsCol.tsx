import { forwardRef } from "react";
import { ControlledTwoItemsColProps } from "./TwoItemsCol.types";
import { Container } from "@omegup-school/ui-molecules";

export const TwoItemsCol = forwardRef((
  props: ControlledTwoItemsColProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { item1, item2 } = props

  return (
    <Container
      ref={ref}
      direction="column"
      alignItems="start"
      children={[
        item1,
        item2
      ]}
    />
  )
})