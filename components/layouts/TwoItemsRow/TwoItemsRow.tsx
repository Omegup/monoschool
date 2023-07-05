import { forwardRef } from "react";
import { ControlledTwoItemsRowProps } from "./TwoItemsRow.types";
import { Container } from "@omegup-school/ui-molecules";

export const TwoItemsRow = forwardRef((
  props: ControlledTwoItemsRowProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { item1, item2 } = props

  return (
    <Container
      ref={ref}
      direction="row"
      paddingInline={'s5'}
      justifyContent="start"
      gap={10}
      children={[
        item1,
        item2
      ]}
    />
  )
})