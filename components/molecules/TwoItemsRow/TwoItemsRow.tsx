import { forwardRef } from "react";
import { ControlledTwoItemsRowProps } from "./TwoItemsRow.types";
import { Container } from "@omegup-school/ui-atoms";

export const TwoItemsRow = forwardRef((
  props: ControlledTwoItemsRowProps,
  ref: React.Ref<HTMLDivElement>
) => {

  const { children } = props

  return (
    <Container
      ref={ref}
      direction="row"
      paddingInline={'s5'}
      justifyContent="start"
      gap={10}
    >
      {children}
    </Container>
  )
})